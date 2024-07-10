
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
	const float M_PI = 3.14159265358979323846;

	// Both are unit vectors
	vec2 v1;
	vec2 v2 = normalize(vec2(1.0, 1.0));


	float theta = color.g * 2.0 * M_PI;
	float phi = color.b * 2.0 * M_PI;
	v1.x = cos(theta) * sin(phi);
	v1.y = sin(theta) * sin(phi);

	vec2 result;
	float eta = 0.5;
	float k = 1.0 - eta * eta * (1.0 - dot(v1, v2) * dot(v1, v2));
	if(k < 0.0)
		result = vec2(0.0);
	else
		result = eta * v1 - (eta * dot(v1, v2) + sqrt(k)) * v2;

	gl_FragColor = vec4((result + 1.0) / 2.0, 0.0, 1.0);
}
