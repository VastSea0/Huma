
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


attribute vec4 gtf_Vertex;
uniform mat4 gtf_ModelViewProjectionMatrix;
varying vec4 color;



void qualifiers(in float a[4], out float b[4], inout float c[4], const in float d[4], float e[4])
{
	b[0] = a[0];
	c[0] += d[0];
	a[0] += 1.0;
	e[0] += 1.0;

	b[1] = a[1];
	c[1] += d[1];
	a[1] += 1.0;
	e[1] += 1.0;

	b[2] = a[2];
	c[2] += d[2];
	a[2] += 1.0;
	e[2] += 1.0;

	b[3] = a[3];
	c[3] += d[3];
	a[3] += 1.0;
	e[3] += 1.0;
}




void main (void)
{
	float a[4];
	float b[4];
	float c[4];
	float d[4];
	float e[4];
	float q = 0.0;
	float q2 = 0.0;

	a[0] = 1.0;
	b[0] = 2.0;
	c[0] = 3.0;
	d[0] = 4.0;
	e[0] = 1.0;

	a[1] = 1.0;
	b[1] = 2.0;
	c[1] = 3.0;
	d[1] = 4.0;
	e[1] = 1.0;

	a[2] = 1.0;
	b[2] = 2.0;
	c[2] = 3.0;
	d[2] = 4.0;
	e[2] = 1.0;

	a[3] = 1.0;
	b[3] = 2.0;
	c[3] = 3.0;
	d[3] = 4.0;
	e[3] = 1.0;

	qualifiers(a, b, c, d, e);

	// randomly test a value
	if(a[0] == 1.0) q += 1.0;
	if(b[1] == 1.0) q += 2.0;
	if(c[2] == 7.0) q += 4.0;
	if(d[3] == 4.0) q2 += 1.0;
	if(e[0] == 1.0) q2 += 2.0;

	color = vec4(vec2(q / 7.0, q2 / 3.0), 1.0, 1.0);
	gl_Position = gtf_ModelViewProjectionMatrix * gtf_Vertex;
}
