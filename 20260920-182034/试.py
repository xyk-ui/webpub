def main():
    while True:
        print("\n===== 简单计算器 =====")
        print("1. 加法")
        print("2. 减法")
        print("3. 退出")
        
        choice = input("请选择操作 (1/2/3): ")
        
        if choice == '3':
            print("感谢使用计算器，再见！")
            break
        
        try:
            num1 = float(input("请输入第一个数字: "))
            num2 = float(input("请输入第二个数字: "))
        except ValueError:
            print("输入无效，请输入有效的数字。")
            continue
        
        if choice == '1':
            result = num1 + num2
            print(f"{num1} + {num2} = {result}")
        elif choice == '2':
            result = num1 - num2
            print(f"{num1} - {num2} = {result}")
        else:
            print("无效的选择，请重新输入。")

if __name__ == "__main__":
    main()
