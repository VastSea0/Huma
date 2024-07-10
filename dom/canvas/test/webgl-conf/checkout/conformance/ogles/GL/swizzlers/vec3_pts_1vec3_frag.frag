
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
varying vec4 color;
void main (void)
{
	vec4 al = color;
	vec3 m = al.stp;
	vec3 t = m.pts;
	vec4 a = vec4(t.p, t.t, t.s ,al.q);
	gl_FragColor = a;
}
