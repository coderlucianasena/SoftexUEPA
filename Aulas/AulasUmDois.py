def soma(a, b):
    return a + b

def subtrai(a, b):
    return a - b

def multiplica(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Erro: divisão por zero"
    return a / b

print("Calculadora Simples")
print("Selecione a operação:")
print("1 - Soma")
print("2 - Subtração")
print("3 - Multiplicação")
print("4 - Divisão")

opcao = input("Digite a opção (1/2/3/4): ")

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

if opcao == '1':
    print("Resultado:", soma(num1, num2))
elif opcao == '2':
    print("Resultado:", subtrai(num1, num2))
elif opcao == '3':
    print("Resultado:", multiplica(num1, num2))
elif opcao == '4':
    print("Resultado:", divide(num1, num2))
else:
    print("Opção inválida!")