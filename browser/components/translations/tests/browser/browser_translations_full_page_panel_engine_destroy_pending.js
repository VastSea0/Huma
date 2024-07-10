/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

/**
 * Manually destroy the engine while a page is in the background, and test that the page
 * is still translated after switching back to it.
 */
add_task(async function test_translations_engine_destroy_pending() {
  const {
    cleanup,
    resolveDownloads,
    runInPage,
    tab: spanishTab,
  } = await loadTestPage({
    page: SPANISH_PAGE_URL,
    languagePairs: LANGUAGE_PAIRS,
  });

  await FullPageTranslationsTestUtils.assertTranslationsButton(
    { button: true },
    "The button is available."
  );
  await FullPageTranslationsTestUtils.openPanel({
    onOpenPanel: FullPageTranslationsTestUtils.assertPanelViewDefault,
  });

  await FullPageTranslationsTestUtils.clickTranslateButton({
    downloadHandler: resolveDownloads,
  });

  await FullPageTranslationsTestUtils.assertPageIsTranslated(
    "es",
    "en",
    runInPage
  );

  const { removeTab: removeEnglishTab } = await addTab(
    ENGLISH_PAGE_URL,
    "Creating a new tab for a page in English."
  );

  info("Destroy the engine process");
  await EngineProcess.destroyTranslationsEngine();

  info("Mutate the page's content to re-trigger a translation.");
  await runInPage(async TranslationsTest => {
    const { getH1 } = TranslationsTest.getSelectors();
    getH1().innerText = "New text for the H1";
  });

  info("Wait for a second to ensure the mutation takes.");
  await TestUtils.waitForTick();

  await switchTab(spanishTab, "spanish tab");

  info("The engine downloads should be requested again.");
  resolveDownloads(1);

  await runInPage(async TranslationsTest => {
    const { getH1 } = TranslationsTest.getSelectors();
    await TranslationsTest.assertTranslationResult(
      "The mutated content should be translated.",
      getH1,
      "NEW TEXT FOR THE H1 [es to en]"
    );
  });

  await removeEnglishTab();
  await cleanup();
});
