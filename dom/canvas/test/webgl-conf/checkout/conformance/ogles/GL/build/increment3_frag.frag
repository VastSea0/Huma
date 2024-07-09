
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
uniform sampler2D sampler2d;

void main()
{
    sampler2d++;  // uniforms cannot be modified
}
