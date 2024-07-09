/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

import { createSelector } from "devtools/client/shared/vendor/reselect";

/**
 * Main selector to build the SourceTree,
 * but this is also the source of data for the QuickOpen dialog.
 *
 * If no project directory root is set, this will return the thread items.
 * Otherwise this will return the items where we set the directory root.
 */
export const getSourcesTreeSources = createSelector(
  getProjectDirectoryRoot,
  state => state.sourcesTree.threadItems,
  (projectDirectoryRoot, threadItems) => {
    // Only accept thread which have their thread attribute set.
    // This may come late, if we receive ADD_SOURCES before INSERT_THREAD.
    // Also filter out threads which have no sources, in case we had
    // INSERT_THREAD with no ADD_SOURCES.
    threadItems = threadItems.filter(
      item => !!item.thread && !!item.children.length
    );

    if (projectDirectoryRoot) {
      const directory = getDirectoryForUniquePath(
        projectDirectoryRoot,
        threadItems
      );
      if (directory) {
        return directory.children;
      }
      return [];
    }

    return threadItems;
  }
);

// This is used by QuickOpen UI
/**
 * Main selector for the QuickOpen dialog.
 *
 * The returns the list of all the reducer's source objects
 * that are possibly displayed in the Source Tree.
 * This doesn't return Source Tree Items, but the source objects.
 */
export const getDisplayedSourcesList = createSelector(
  getSourcesTreeSources,
  roots => {
    const sources = [];
    function walk(item) {
      if (item.type == "source") {
        sources.push(item.source);
      } else {
        for (const child of item.children) {
          walk(child);
        }
      }
    }
    for (const root of roots) {
      walk(root);
    }
    return sources;
  }
);

export function getExpandedState(state) {
  return state.sourcesTree.expanded;
}

export function getFocusedSourceItem(state) {
  return state.sourcesTree.focusedItem;
}

export function getProjectDirectoryRoot(state) {
  return state.sourcesTree.projectDirectoryRoot;
}

export function getProjectDirectoryRootName(state) {
  return state.sourcesTree.projectDirectoryRootName;
}

/**
 * Lookup for project root item, matching the given "unique path".
 */
function getDirectoryForUniquePath(projectRoot, threadItems) {
  const sections = projectRoot.split("|");
  const thread = sections.shift();

  const threadItem = threadItems.find(item => {
    return (
      item.uniquePath == thread ||
      (thread == "top-level" && item.thread.isTopLevel)
    );
  });
  if (!threadItem) {
    dump(
      `No thread item for: ${projectRoot} -- ${thread} -- ${Object.keys(
        threadItems
      )}\n`
    );
    return null;
  }

  // If we selected a thread, the project root is for a Thread Item
  // and it only contains `${thread}`
  if (!sections.length) {
    return threadItem;
  }

  const group = sections.shift();
  for (const child of threadItem.children) {
    if (child.groupName != group) {
      continue;
    }
    // In case we picked a group, return it...
    // project root looked like this `${thread}|${group}`
    if (!sections.length) {
      return child;
    }
    // ..otherwise, we picked a directory, so look for it by traversing the tree
    // project root looked like this `${thread}|${group}|${directoryPath}`
    const path = sections.shift();
    return findPathInDirectory(child, path);
  }
  dump(` Unable to find group: ${group}\n`);
  return null;

  function findPathInDirectory(directory, path) {
    for (const child of directory.children) {
      if (child.type == "directory") {
        // `path` should be the absolute path from the group/domain
        if (child.path == path) {
          return child;
        }
        // Ignore folders which doesn't match the beginning of the lookup path
        if (!path.startsWith(child.path)) {
          continue;
        }
        const match = findPathInDirectory(child, path);
        if (match) {
          return match;
        }
      }
    }
    dump(`Unable to find directory: ${path}\n`);
    return null;
  }
}
