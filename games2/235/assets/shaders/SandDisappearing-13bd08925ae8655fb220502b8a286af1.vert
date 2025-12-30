#ifdef GL_ES
#define LOWP lowp
    precision mediump float;
#else
    #define LOWP
#endif

#version 120
attribute vec4 a_position;    
attribute vec4 a_color;
attribute vec2 a_texCoord0;

uniform mat4 u_projTrans;
uniform float dt;

varying vec4 v_color;
varying vec2 v_texCoords;

void main()                
{                           
	v_color = vec4(1, 1, 1, 1);
	v_texCoords = a_texCoord0;
	mat4 trans = mat4(u_projTrans);
	trans[0][1] += dt * 0.001;
	gl_Position = trans * a_position;        
}                           