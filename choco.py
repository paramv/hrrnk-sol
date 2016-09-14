MOD = 1000000007
def pow2(exp):
	a = 2
	c = 1
	d = a
	while (exp):
		if (exp & 1):
			c = int((c*d) % MOD);
		d = int((d*d) % MOD);
		exp >>= 1;
	return int(c);

N = int(raw_input())
arr = []
k = 0 #even nos
for x in raw_input().split():
	num = int(x)
	arr.append(num)
	if num % 2 == 0:
		k = k+1

if N-k > 0:
	print pow2(N-1)-1
elif N-k <= 0:
	print pow2(N)-1
