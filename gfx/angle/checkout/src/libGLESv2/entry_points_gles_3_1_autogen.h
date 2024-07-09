// GENERATED FILE - DO NOT EDIT.
// Generated by generate_entry_points.py using data from gl.xml.
//
// Copyright 2020 The ANGLE Project Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// entry_points_gles_3_1_autogen.h:
//   Defines the GLES 3.1 entry points.

#ifndef LIBGLESV2_ENTRY_POINTS_GLES_3_1_AUTOGEN_H_
#define LIBGLESV2_ENTRY_POINTS_GLES_3_1_AUTOGEN_H_

#include <GLES3/gl31.h>
#include <export.h>
#include "common/platform.h"

extern "C" {
ANGLE_EXPORT void GL_APIENTRY GL_ActiveShaderProgram(GLuint pipeline, GLuint program);
ANGLE_EXPORT void GL_APIENTRY GL_BindImageTexture(GLuint unit,
                                                  GLuint texture,
                                                  GLint level,
                                                  GLboolean layered,
                                                  GLint layer,
                                                  GLenum access,
                                                  GLenum format);
ANGLE_EXPORT void GL_APIENTRY GL_BindProgramPipeline(GLuint pipeline);
ANGLE_EXPORT void GL_APIENTRY GL_BindVertexBuffer(GLuint bindingindex,
                                                  GLuint buffer,
                                                  GLintptr offset,
                                                  GLsizei stride);
ANGLE_EXPORT GLuint GL_APIENTRY GL_CreateShaderProgramv(GLenum type,
                                                        GLsizei count,
                                                        const GLchar *const *strings);
ANGLE_EXPORT void GL_APIENTRY GL_DeleteProgramPipelines(GLsizei n, const GLuint *pipelines);
ANGLE_EXPORT void GL_APIENTRY GL_DispatchCompute(GLuint num_groups_x,
                                                 GLuint num_groups_y,
                                                 GLuint num_groups_z);
ANGLE_EXPORT void GL_APIENTRY GL_DispatchComputeIndirect(GLintptr indirect);
ANGLE_EXPORT void GL_APIENTRY GL_DrawArraysIndirect(GLenum mode, const void *indirect);
ANGLE_EXPORT void GL_APIENTRY GL_DrawElementsIndirect(GLenum mode,
                                                      GLenum type,
                                                      const void *indirect);
ANGLE_EXPORT void GL_APIENTRY GL_FramebufferParameteri(GLenum target, GLenum pname, GLint param);
ANGLE_EXPORT void GL_APIENTRY GL_GenProgramPipelines(GLsizei n, GLuint *pipelines);
ANGLE_EXPORT void GL_APIENTRY GL_GetBooleani_v(GLenum target, GLuint index, GLboolean *data);
ANGLE_EXPORT void GL_APIENTRY GL_GetFramebufferParameteriv(GLenum target,
                                                           GLenum pname,
                                                           GLint *params);
ANGLE_EXPORT void GL_APIENTRY GL_GetMultisamplefv(GLenum pname, GLuint index, GLfloat *val);
ANGLE_EXPORT void GL_APIENTRY GL_GetProgramInterfaceiv(GLuint program,
                                                       GLenum programInterface,
                                                       GLenum pname,
                                                       GLint *params);
ANGLE_EXPORT void GL_APIENTRY GL_GetProgramPipelineInfoLog(GLuint pipeline,
                                                           GLsizei bufSize,
                                                           GLsizei *length,
                                                           GLchar *infoLog);
ANGLE_EXPORT void GL_APIENTRY GL_GetProgramPipelineiv(GLuint pipeline, GLenum pname, GLint *params);
ANGLE_EXPORT GLuint GL_APIENTRY GL_GetProgramResourceIndex(GLuint program,
                                                           GLenum programInterface,
                                                           const GLchar *name);
ANGLE_EXPORT GLint GL_APIENTRY GL_GetProgramResourceLocation(GLuint program,
                                                             GLenum programInterface,
                                                             const GLchar *name);
ANGLE_EXPORT void GL_APIENTRY GL_GetProgramResourceName(GLuint program,
                                                        GLenum programInterface,
                                                        GLuint index,
                                                        GLsizei bufSize,
                                                        GLsizei *length,
                                                        GLchar *name);
ANGLE_EXPORT void GL_APIENTRY GL_GetProgramResourceiv(GLuint program,
                                                      GLenum programInterface,
                                                      GLuint index,
                                                      GLsizei propCount,
                                                      const GLenum *props,
                                                      GLsizei count,
                                                      GLsizei *length,
                                                      GLint *params);
ANGLE_EXPORT void GL_APIENTRY GL_GetTexLevelParameterfv(GLenum target,
                                                        GLint level,
                                                        GLenum pname,
                                                        GLfloat *params);
ANGLE_EXPORT void GL_APIENTRY GL_GetTexLevelParameteriv(GLenum target,
                                                        GLint level,
                                                        GLenum pname,
                                                        GLint *params);
ANGLE_EXPORT GLboolean GL_APIENTRY GL_IsProgramPipeline(GLuint pipeline);
ANGLE_EXPORT void GL_APIENTRY GL_MemoryBarrier(GLbitfield barriers);
ANGLE_EXPORT void GL_APIENTRY GL_MemoryBarrierByRegion(GLbitfield barriers);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform1f(GLuint program, GLint location, GLfloat v0);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform1fv(GLuint program,
                                                   GLint location,
                                                   GLsizei count,
                                                   const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform1i(GLuint program, GLint location, GLint v0);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform1iv(GLuint program,
                                                   GLint location,
                                                   GLsizei count,
                                                   const GLint *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform1ui(GLuint program, GLint location, GLuint v0);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform1uiv(GLuint program,
                                                    GLint location,
                                                    GLsizei count,
                                                    const GLuint *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform2f(GLuint program,
                                                  GLint location,
                                                  GLfloat v0,
                                                  GLfloat v1);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform2fv(GLuint program,
                                                   GLint location,
                                                   GLsizei count,
                                                   const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform2i(GLuint program,
                                                  GLint location,
                                                  GLint v0,
                                                  GLint v1);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform2iv(GLuint program,
                                                   GLint location,
                                                   GLsizei count,
                                                   const GLint *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform2ui(GLuint program,
                                                   GLint location,
                                                   GLuint v0,
                                                   GLuint v1);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform2uiv(GLuint program,
                                                    GLint location,
                                                    GLsizei count,
                                                    const GLuint *value);
ANGLE_EXPORT void GL_APIENTRY
GL_ProgramUniform3f(GLuint program, GLint location, GLfloat v0, GLfloat v1, GLfloat v2);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform3fv(GLuint program,
                                                   GLint location,
                                                   GLsizei count,
                                                   const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY
GL_ProgramUniform3i(GLuint program, GLint location, GLint v0, GLint v1, GLint v2);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform3iv(GLuint program,
                                                   GLint location,
                                                   GLsizei count,
                                                   const GLint *value);
ANGLE_EXPORT void GL_APIENTRY
GL_ProgramUniform3ui(GLuint program, GLint location, GLuint v0, GLuint v1, GLuint v2);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform3uiv(GLuint program,
                                                    GLint location,
                                                    GLsizei count,
                                                    const GLuint *value);
ANGLE_EXPORT void GL_APIENTRY
GL_ProgramUniform4f(GLuint program, GLint location, GLfloat v0, GLfloat v1, GLfloat v2, GLfloat v3);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform4fv(GLuint program,
                                                   GLint location,
                                                   GLsizei count,
                                                   const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY
GL_ProgramUniform4i(GLuint program, GLint location, GLint v0, GLint v1, GLint v2, GLint v3);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform4iv(GLuint program,
                                                   GLint location,
                                                   GLsizei count,
                                                   const GLint *value);
ANGLE_EXPORT void GL_APIENTRY
GL_ProgramUniform4ui(GLuint program, GLint location, GLuint v0, GLuint v1, GLuint v2, GLuint v3);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniform4uiv(GLuint program,
                                                    GLint location,
                                                    GLsizei count,
                                                    const GLuint *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix2fv(GLuint program,
                                                         GLint location,
                                                         GLsizei count,
                                                         GLboolean transpose,
                                                         const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix2x3fv(GLuint program,
                                                           GLint location,
                                                           GLsizei count,
                                                           GLboolean transpose,
                                                           const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix2x4fv(GLuint program,
                                                           GLint location,
                                                           GLsizei count,
                                                           GLboolean transpose,
                                                           const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix3fv(GLuint program,
                                                         GLint location,
                                                         GLsizei count,
                                                         GLboolean transpose,
                                                         const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix3x2fv(GLuint program,
                                                           GLint location,
                                                           GLsizei count,
                                                           GLboolean transpose,
                                                           const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix3x4fv(GLuint program,
                                                           GLint location,
                                                           GLsizei count,
                                                           GLboolean transpose,
                                                           const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix4fv(GLuint program,
                                                         GLint location,
                                                         GLsizei count,
                                                         GLboolean transpose,
                                                         const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix4x2fv(GLuint program,
                                                           GLint location,
                                                           GLsizei count,
                                                           GLboolean transpose,
                                                           const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_ProgramUniformMatrix4x3fv(GLuint program,
                                                           GLint location,
                                                           GLsizei count,
                                                           GLboolean transpose,
                                                           const GLfloat *value);
ANGLE_EXPORT void GL_APIENTRY GL_SampleMaski(GLuint maskNumber, GLbitfield mask);
ANGLE_EXPORT void GL_APIENTRY GL_TexStorage2DMultisample(GLenum target,
                                                         GLsizei samples,
                                                         GLenum internalformat,
                                                         GLsizei width,
                                                         GLsizei height,
                                                         GLboolean fixedsamplelocations);
ANGLE_EXPORT void GL_APIENTRY GL_UseProgramStages(GLuint pipeline,
                                                  GLbitfield stages,
                                                  GLuint program);
ANGLE_EXPORT void GL_APIENTRY GL_ValidateProgramPipeline(GLuint pipeline);
ANGLE_EXPORT void GL_APIENTRY GL_VertexAttribBinding(GLuint attribindex, GLuint bindingindex);
ANGLE_EXPORT void GL_APIENTRY GL_VertexAttribFormat(GLuint attribindex,
                                                    GLint size,
                                                    GLenum type,
                                                    GLboolean normalized,
                                                    GLuint relativeoffset);
ANGLE_EXPORT void GL_APIENTRY GL_VertexAttribIFormat(GLuint attribindex,
                                                     GLint size,
                                                     GLenum type,
                                                     GLuint relativeoffset);
ANGLE_EXPORT void GL_APIENTRY GL_VertexBindingDivisor(GLuint bindingindex, GLuint divisor);
}  // extern "C"

#endif  // LIBGLESV2_ENTRY_POINTS_GLES_3_1_AUTOGEN_H_
