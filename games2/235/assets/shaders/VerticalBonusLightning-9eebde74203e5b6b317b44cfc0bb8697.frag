#ifdef GL_ES
#define LOWP lowp
    precision mediump float;
#else
    #define LOWP
#endif

varying vec4 v_color;
varying vec2 v_texCoords;

uniform sampler2D u_texture, u_texture_disp, u_gem_texture;
uniform mat4 u_projTrans;
uniform float u_dt;
uniform float u_random;
uniform float u_part_size;
uniform float u_u1, u_u2;
uniform float u_v1, u_v2;
uniform float u_gem_u1, u_gem_u2;
uniform float u_gem_v1, u_gem_v2;
uniform float u_offset_x, u_size_coef;

void main() 
{
	float x = (v_texCoords.x - u_u1) / (u_u2 - u_u1);
	float y = (v_texCoords.y - u_v1) / (u_v2 - u_v1);
	
	float gemX = u_gem_u1 + (u_offset_x + x * u_size_coef) * (u_gem_u2 - u_gem_u1);
	float gemY = u_gem_v1 + y * (u_gem_v2 - u_gem_v1);

	float part = floor(y / u_part_size);
	vec2 dispPartCoords = vec2(0.05 + u_dt / 10.0, u_part_size * part * u_random);
	vec2 dispNextPartCoords = vec2(0.05 + u_dt / 10.0, u_part_size * (part + 1.0) * u_random);
	
	float rand = -0.5 + texture2D(u_texture_disp, dispPartCoords).r;
	float nextRand = -0.5 + texture2D(u_texture_disp, dispNextPartCoords).r;

	vec2 coords = vec2(v_texCoords);
	coords.x += (rand + (y - part * u_part_size) / u_part_size * (nextRand - rand)) * 0.05;

	vec2 gemCoords = vec2(gemX, gemY);	

	vec4 color = vec4(v_color);
	color.a = texture2D(u_gem_texture, gemCoords).a;
	color.r = rand;

	gl_FragColor = color * texture2D(u_texture, coords);
}