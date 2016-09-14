def calc(l,b):

	area = int(l * b)
	count = area
	larger = max(l,b)
	if(l == 1 and b == 1):
		return 1
	if(l == b):
		return 1
	for i in range(larger,1,-1):
		if( area % (i*i) == 0 and (l % i == 0 and b % i == 0)):
			count = area / (i*i)
			break
	return count


n = int(raw_input())
for i in range(0,n):
    l,b = raw_input().split()
    l,b = int(l),int(b)
    print calc(l,b)
