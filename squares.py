import math

M = 1000000007
V = long((1 << 30) % M)
catalysts = {
	'30': 73741817,
	'100': 976371285,
	'1000': 688423210,
	'100000': 607723520,
	'10000000': 255718402
}

def pow(exp):
	i = 0
	res = 1
	q = int(math.floor(exp / 30))
	r = int(exp % 30)

	if (exp == 0):
		return 1
	if (exp == 1):
		return 2

	if (exp > 10000000):
		div = 10000000
	elif (exp > 100000):
		div = 100000
	elif (exp > 1000) :
		div = 1000
	elif (exp > 100):
		div = 100
	elif (exp > 30) :
		div = 30


	q = int(math.floor(exp / div));
	r = int(math.floor(exp % div));
	v = catalysts[str(div)];

	while (i < q):
		i += 1
		res = long((res * v) % M)

	if (r > 0):
		res = long((res * (1 << r)) % M)
	return res

# print pow(1000000000)
# print (2.**9000)
# print long(math.pow(2,10000) % M)
# print long(2.**10000) % M

def calculateLines(arr):
	results = []
	for a in arr:
		a = int(a.strip())
		# print a
		vertical = pow(a)
		lines = (2 * (vertical + 1)) % M
		results.append(str(lines))
	print '\n'.join(results)


# n = int(raw_input())
# samples=[]
# for i in range(0,n):
#     a = raw_input()
#     samples.append(int(a))
#     # res = solveMeSecond(a,b)
# print samples

with open('input02.txt') as f:
    content = f.readlines()
    calculateLines(content[1:])
