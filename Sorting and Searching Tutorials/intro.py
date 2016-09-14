V = int(raw_input())
n = int(raw_input())
arr = map(lambda v:int(v),raw_input().split())
try:
	print arr.index(V)
except ValueError as e:
	print "-1"