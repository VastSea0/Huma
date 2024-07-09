
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


attribute vec4 gtf_Vertex;
uniform mat4 gtf_ModelViewProjectionMatrix;
varying vec4 color;

struct nestb
{
	vec4 b;
};

struct nesta
{
	vec4 a;
	nestb nest_b;
};

struct nest
{
	nesta nest_a;
};

void main (void)
{
	nest s = nest(nesta(vec4(11, 13, 17, 31), nestb(vec4(12, 19, 29, 69) ) ) );
	color = vec4( vec3(  (s.nest_a.a[0] + s.nest_a.a[1] + s.nest_a.a[2] + s.nest_a.a[3] + s.nest_a.nest_b.b[0] + s.nest_a.nest_b.b[1] + s.nest_a.nest_b.b[2] + s.nest_a.nest_b.b[3]) / 201.0 ), 1.0);
	gl_Position = gtf_ModelViewProjectionMatrix * gtf_Vertex;
}
