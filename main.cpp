#include <bits/stdc++.h>
using namespace std;

void stringReversa(string& nome)
{
	int n = nome.length();
	for (int i = 0; i < n / 2; i++)
		swap(nome[i], nome[n - i - 1]);
}

int main()
{
	string nome;
	std::cout << "Nome" << std::endl;
	std::cin >> nome;
	stringReversa(nome);
	cout << nome;
	return 0;
}