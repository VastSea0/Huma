/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef DOM_SVG_SVGFEMORPHOLOGYELEMENT_H_
#define DOM_SVG_SVGFEMORPHOLOGYELEMENT_H_

#include "SVGAnimatedEnumeration.h"
#include "SVGAnimatedNumberPair.h"
#include "SVGAnimatedString.h"
#include "mozilla/dom/SVGFilters.h"

nsresult NS_NewSVGFEMorphologyElement(
    nsIContent** aResult, already_AddRefed<mozilla::dom::NodeInfo>&& aNodeInfo);

namespace mozilla::dom {

using SVGFEMorphologyElementBase = SVGFilterPrimitiveElement;

class SVGFEMorphologyElement final : public SVGFEMorphologyElementBase {
  friend nsresult(::NS_NewSVGFEMorphologyElement(
      nsIContent** aResult,
      already_AddRefed<mozilla::dom::NodeInfo>&& aNodeInfo));

 protected:
  explicit SVGFEMorphologyElement(
      already_AddRefed<mozilla::dom::NodeInfo>&& aNodeInfo)
      : SVGFEMorphologyElementBase(std::move(aNodeInfo)) {}
  JSObject* WrapNode(JSContext* aCx,
                     JS::Handle<JSObject*> aGivenProto) override;

 public:
  FilterPrimitiveDescription GetPrimitiveDescription(
      SVGFilterInstance* aInstance, const IntRect& aFilterSubregion,
      const nsTArray<bool>& aInputsAreTainted,
      nsTArray<RefPtr<SourceSurface>>& aInputImages) override;
  bool AttributeAffectsRendering(int32_t aNameSpaceID,
                                 nsAtom* aAttribute) const override;
  SVGAnimatedString& GetResultImageName() override {
    return mStringAttributes[RESULT];
  }
  void GetSourceImageNames(nsTArray<SVGStringInfo>& aSources) override;

  nsresult Clone(dom::NodeInfo*, nsINode** aResult) const override;

  nsresult BindToTree(BindContext& aCtx, nsINode& aParent) override;

  // WebIDL
  already_AddRefed<DOMSVGAnimatedString> In1();
  already_AddRefed<DOMSVGAnimatedEnumeration> Operator();
  already_AddRefed<DOMSVGAnimatedNumber> RadiusX();
  already_AddRefed<DOMSVGAnimatedNumber> RadiusY();
  void SetRadius(float rx, float ry);

 protected:
  void GetRXY(int32_t* aRX, int32_t* aRY, const SVGFilterInstance& aInstance);

  NumberPairAttributesInfo GetNumberPairInfo() override;
  EnumAttributesInfo GetEnumInfo() override;
  StringAttributesInfo GetStringInfo() override;

  void UpdateUseCounter() const;

  enum { RADIUS };
  SVGAnimatedNumberPair mNumberPairAttributes[1];
  static NumberPairInfo sNumberPairInfo[1];

  enum { OPERATOR };
  SVGAnimatedEnumeration mEnumAttributes[1];
  static SVGEnumMapping sOperatorMap[];
  static EnumInfo sEnumInfo[1];

  enum { RESULT, IN1 };
  SVGAnimatedString mStringAttributes[2];
  static StringInfo sStringInfo[2];
};

}  // namespace mozilla::dom

#endif  // DOM_SVG_SVGFEMORPHOLOGYELEMENT_H_
