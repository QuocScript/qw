print("chào mừng bạn đến với những câu đố toán học dễ zl")
score = 0
cau_a = int(input("2 * 9 == "))
if cau_a == 2*9:
    print("đúng")
    score += 1
else:
    print("không đúng")
cau_b = int(input("2 * 3 == "))
if cau_b == 2*3:
    print("đúng")
    score += 1
else:
    print("không đúng")
cau_c = int(input("giá trị tuyệt đối của -999 là: "))
if cau_c == 999:
    print("đúng")
    score += 1
else:
    print("không đúng")
print(f'chúc mừng bạn đã hoàn thành, điểm của bạn là {score} trên 3')


