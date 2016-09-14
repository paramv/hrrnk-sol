M = 1000000007
def factorial(n):
	if(n<1):
		return 1
	return n * factorial(n-1)

def calc(m,n):
	return factorial(m+n-1)/((factorial(m-1) * factorial(n)) % M)


r = int(raw_input())
for i in range(0,r):
    n,m = raw_input().split()
    n,m = int(n),int(m)
    print calc(m,n)
