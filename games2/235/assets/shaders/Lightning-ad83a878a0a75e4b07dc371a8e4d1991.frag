#ifdef GL_ES
#define LOWP lowp
    precision mediump float;
#else
    #define LOWP
#endif

varying vec4 v_color;
varying vec2 v_texCoords;

uniform sampler2D u_texture, u_texture_disp;
uniform mat4 u_projTrans;
uniform float u_dt;
uniform float u_random;
uniform float u_part_size;
uniform float u_u1, u_u2;
uniform float u_v1, u_v2;

void main() 
{
	gl_FragColor = v_color * 1.25 * texture2D(u_texture, v_texCoords);
}