# def insertion_sort(arr):
# 	for j in range(1,len(arr)):
# 		key = arr[j]
# 		i = j-1
# 		print('Outside while => j: %s,key %s,arr[%s] %s' %(j,key,i,arr[i]))
# 		while i >= 0 and arr[i] > key:
# 			# print('\t setting arr[%s] as arr[%s]' % (i,i+1))
# 			arr[i+1]=arr[i]
# 			i-=1
# 			# print('\t %s ,i = %s' % (arr,i))
# 			print arr
# 		# print('setting arr[%s] as key(%s or arr[%s])' % (i+1,key,j))
# 		arr[i+1] = key
# 		# print('%s' % arr)

# 	return arr


# def insertion_sort_rev(arr):
# 	l = len(arr)
# 	for j in range(l-1,-1,-1):
# 		key = arr[j]
# 		i= j - 1
# 		# print('Outside while => j: %s,key %s,arr[%s] %s' %(j,key,i,arr[i]))
# 		while i >= 0 and arr[i] > key:
# 			# print('\t setting arr[%s] as arr[%s]' % (i-1,i))
# 			arr[i+1] = arr[i]
# 			i-=1
# 			# print('\t %s ,i = %s' % (arr,i))
# 			print arr
# 		arr[i+1] = key
# 		# print('%s' % arr)
# 	print arr

# # n = int(raw_input())
# # arr = map(lambda v:int(v),raw_input().split())
# print insertion_sort([4,2,6,8,3])
# insertion_sort_rev([2,4,6,8,3])


# def insertion_sort(arr):
# 	l = len(arr)
# 	for j in range(l-1,-1,-1):
# 		key = arr[j]
# 		i= j - 1
# 		while i >= 0 and arr[i] > key:
# 			arr[i+1] = arr[i]
# 			i-=1
# 		arr[i+1] = key
# 		print ' '.join(str(x) for x in arr)
# 	print ' '.join(str(x) for x in arr)
# 	return arr

def insertion_sort(arr):
	shifts = 0
	for j in range(1,len(arr)):
		key = arr[j]
		i = j-1
		while i >= 0 and arr[i] > key:
			shifts+=1
			arr[i+1]=arr[i]
			i-=1
		arr[i+1] = key

	print shifts
	return arr


n = int(raw_input())
arr = map(lambda v:int(v),raw_input().split())
insertion_sort(arr)
# insertion_sort([2,1,3,1,2])

