Type 	Value
Model load	2150.0 ms
backend	wasm
1st inference	162.0 ms
Peak memory	19.63 MB
Leaked tensors	0
2nd inference	233.0 ms
Number of kernels	122
Subsequent average(50 runs)	106.4 ms
Best time	103.0 ms
	
backend	webgl
1st inference	2655.0 ms
Peak memory	19.63 MB
Leaked tensors	0
2nd inference	1106.0 ms
Subsequent average(50 runs)	15.6 ms
Best time	12.0 ms
	
backend	cpu
1st inference	1512.0 ms
Peak memory	19.63 MB
Leaked tensors	0
2nd inference	840.0 ms
Number of kernels	122
Subsequent average(50 runs)	852.7 ms
Best time	793.0 ms


Lesson learned:
On a desktop w/ moderately good GPU, WebGL is best
WASM is better than CPU

And firefox prompts to kill the web page when it processes in the CPU thread.

Thus when WebGL or WASM are unavailable, just don't do ML