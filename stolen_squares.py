MOD = 1000000007;

def pow(exp):
	a = 2
	c = 1
	d = a
	while (exp):
		if (exp & 1):
			c = int((c*d) % MOD);
		d = int((d*d) % MOD);
		exp >>= 1;
	return int(c);

n = int(raw_input())
samples=[]
for i in range(0,n):
    a = int(raw_input())
    print ('%s' % str(int((pow(a + 1) + 2) % MOD)))
