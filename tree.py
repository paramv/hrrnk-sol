
# V = int(raw_input())
# E = int(raw_input())
# edges = []
tree = {}
# for i in range(0,E):
# 	a,b = raw_input().split()
# 	try:
# 		tree[a].append(2)
# 	except Exception as e:
# 		tree[a] = []

V = 10
E = 9
t = '2 1\n3 1\n4 3\n5 2\n6 1\n7 2\n8 6\n9 8\n10 8'
t = t.split('\n')
for el in t:
	a,b = el.split()
	try:
		tree[a].append(b)
	except Exception as e:
		print e
		tree[a] = []

print tree