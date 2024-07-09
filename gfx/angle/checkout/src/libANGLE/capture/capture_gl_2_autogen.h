// GENERATED FILE - DO NOT EDIT.
// Generated by generate_entry_points.py using data from gl.xml and gl_angle_ext.xml.
//
// Copyright 2020 The ANGLE Project Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// capture_gl_2_autogen.h:
//   Capture functions for the OpenGL ES Desktop GL 2.x entry points.

#ifndef LIBANGLE_CAPTURE_GL_2_AUTOGEN_H_
#define LIBANGLE_CAPTURE_GL_2_AUTOGEN_H_

#include "common/PackedEnums.h"
#include "libANGLE/capture/FrameCapture.h"

namespace gl
{

// Method Captures

// GL 2.0
angle::CallCapture CaptureGetVertexAttribdv(const State &glState,
                                            bool isCallValid,
                                            GLuint index,
                                            GLenum pname,
                                            GLdouble *params);
angle::CallCapture CaptureVertexAttrib1d(const State &glState,
                                         bool isCallValid,
                                         GLuint index,
                                         GLdouble x);
angle::CallCapture CaptureVertexAttrib1dv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLdouble *v);
angle::CallCapture CaptureVertexAttrib1s(const State &glState,
                                         bool isCallValid,
                                         GLuint index,
                                         GLshort x);
angle::CallCapture CaptureVertexAttrib1sv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLshort *v);
angle::CallCapture CaptureVertexAttrib2d(const State &glState,
                                         bool isCallValid,
                                         GLuint index,
                                         GLdouble x,
                                         GLdouble y);
angle::CallCapture CaptureVertexAttrib2dv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLdouble *v);
angle::CallCapture CaptureVertexAttrib2s(const State &glState,
                                         bool isCallValid,
                                         GLuint index,
                                         GLshort x,
                                         GLshort y);
angle::CallCapture CaptureVertexAttrib2sv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLshort *v);
angle::CallCapture CaptureVertexAttrib3d(const State &glState,
                                         bool isCallValid,
                                         GLuint index,
                                         GLdouble x,
                                         GLdouble y,
                                         GLdouble z);
angle::CallCapture CaptureVertexAttrib3dv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLdouble *v);
angle::CallCapture CaptureVertexAttrib3s(const State &glState,
                                         bool isCallValid,
                                         GLuint index,
                                         GLshort x,
                                         GLshort y,
                                         GLshort z);
angle::CallCapture CaptureVertexAttrib3sv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLshort *v);
angle::CallCapture CaptureVertexAttrib4Nbv(const State &glState,
                                           bool isCallValid,
                                           GLuint index,
                                           const GLbyte *v);
angle::CallCapture CaptureVertexAttrib4Niv(const State &glState,
                                           bool isCallValid,
                                           GLuint index,
                                           const GLint *v);
angle::CallCapture CaptureVertexAttrib4Nsv(const State &glState,
                                           bool isCallValid,
                                           GLuint index,
                                           const GLshort *v);
angle::CallCapture CaptureVertexAttrib4Nub(const State &glState,
                                           bool isCallValid,
                                           GLuint index,
                                           GLubyte x,
                                           GLubyte y,
                                           GLubyte z,
                                           GLubyte w);
angle::CallCapture CaptureVertexAttrib4Nubv(const State &glState,
                                            bool isCallValid,
                                            GLuint index,
                                            const GLubyte *v);
angle::CallCapture CaptureVertexAttrib4Nuiv(const State &glState,
                                            bool isCallValid,
                                            GLuint index,
                                            const GLuint *v);
angle::CallCapture CaptureVertexAttrib4Nusv(const State &glState,
                                            bool isCallValid,
                                            GLuint index,
                                            const GLushort *v);
angle::CallCapture CaptureVertexAttrib4bv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLbyte *v);
angle::CallCapture CaptureVertexAttrib4d(const State &glState,
                                         bool isCallValid,
                                         GLuint index,
                                         GLdouble x,
                                         GLdouble y,
                                         GLdouble z,
                                         GLdouble w);
angle::CallCapture CaptureVertexAttrib4dv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLdouble *v);
angle::CallCapture CaptureVertexAttrib4iv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLint *v);
angle::CallCapture CaptureVertexAttrib4s(const State &glState,
                                         bool isCallValid,
                                         GLuint index,
                                         GLshort x,
                                         GLshort y,
                                         GLshort z,
                                         GLshort w);
angle::CallCapture CaptureVertexAttrib4sv(const State &glState,
                                          bool isCallValid,
                                          GLuint index,
                                          const GLshort *v);
angle::CallCapture CaptureVertexAttrib4ubv(const State &glState,
                                           bool isCallValid,
                                           GLuint index,
                                           const GLubyte *v);
angle::CallCapture CaptureVertexAttrib4uiv(const State &glState,
                                           bool isCallValid,
                                           GLuint index,
                                           const GLuint *v);
angle::CallCapture CaptureVertexAttrib4usv(const State &glState,
                                           bool isCallValid,
                                           GLuint index,
                                           const GLushort *v);

// GL 2.1

// Parameter Captures

// GL 2.0
void CaptureGetVertexAttribdv_params(const State &glState,
                                     bool isCallValid,
                                     GLuint index,
                                     GLenum pname,
                                     GLdouble *params,
                                     angle::ParamCapture *paramCapture);
void CaptureVertexAttrib1dv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLdouble *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib1sv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLshort *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib2dv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLdouble *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib2sv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLshort *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib3dv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLdouble *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib3sv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLshort *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4Nbv_v(const State &glState,
                               bool isCallValid,
                               GLuint index,
                               const GLbyte *v,
                               angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4Niv_v(const State &glState,
                               bool isCallValid,
                               GLuint index,
                               const GLint *v,
                               angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4Nsv_v(const State &glState,
                               bool isCallValid,
                               GLuint index,
                               const GLshort *v,
                               angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4Nubv_v(const State &glState,
                                bool isCallValid,
                                GLuint index,
                                const GLubyte *v,
                                angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4Nuiv_v(const State &glState,
                                bool isCallValid,
                                GLuint index,
                                const GLuint *v,
                                angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4Nusv_v(const State &glState,
                                bool isCallValid,
                                GLuint index,
                                const GLushort *v,
                                angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4bv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLbyte *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4dv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLdouble *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4iv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLint *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4sv_v(const State &glState,
                              bool isCallValid,
                              GLuint index,
                              const GLshort *v,
                              angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4ubv_v(const State &glState,
                               bool isCallValid,
                               GLuint index,
                               const GLubyte *v,
                               angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4uiv_v(const State &glState,
                               bool isCallValid,
                               GLuint index,
                               const GLuint *v,
                               angle::ParamCapture *paramCapture);
void CaptureVertexAttrib4usv_v(const State &glState,
                               bool isCallValid,
                               GLuint index,
                               const GLushort *v,
                               angle::ParamCapture *paramCapture);

// GL 2.1
}  // namespace gl

#endif  // LIBANGLE_CAPTURE_GL_2_AUTOGEN_H_
