-- Active: 1700757653745@@127.0.0.1@3306@estoque

## Selecionando um ID único com ( = )
SELECT * FROM stock_entry WHERE id_entry = 2;

## Selecionando todos os IDs, menos o 2 ( <> )
SELECT * FROM stock_entry WHERE id_entry <> 2;

## Selecionando todos os IDs maiores que 3 ( > ) 
SELECT * FROM stock_entry WHERE id_entry > 3;

## Selecionando todos os IDs menores que 3 ( < ) 
SELECT * FROM stock_entry WHERE id_entry < 3;

## Selecionando todos os IDs maiores iguais que 3 ( >= ) 
SELECT * FROM stock_entry WHERE id_entry >= 6;

## Selecionando apenas os IDs 1,2,4 (IN)
SELECT * FROM stock_entry WHERE id_entry IN (1,2,4);

## Selecionando todos os IDs menos 1,2,4 (NOT IN)
SELECT * FROM stock_entry WHERE id_entry NOT IN (1,2,4);
 
## Selecionando apenas os IDs que começem com 1 (LIKE)
SELECT * FROM stock_entry WHERE id_entry LIKE '1%';

## Selecionando todos os IDs, menos os que começam com 2 (NOT LIKE)
SELECT * FROM stock_entry WHERE id_entry NOT LIKE '2%';

## Selecionando valores na coluna entre dois valores (BETWEEN AND)
SELECT * FROM stock_entry WHERE date_entry BETWEEN '2021-11-08' AND '2023-11-21';  

## Selecionando os valores que são nulos ou não (IS NULL e IS NOT NULL)
SELECT * FROM stock_entry WHERE date_entry IS NOT NULL;

## Concatena as frases
SELECT CONCAT('Olá ', 'Mundo') AS Mensagem;

## Conta quantas caracteres
SELECT LENGTH('Opção') AS Comprimento;

## Conta quantas letras
SELECT CHAR_LENGTH('Opção') AS Comprimento;

## Coloca a palavra em maiúsculo
SELECT UPPER('opção') AS Maiusculas;

## Coloca a palavra em minúsculo
SELECT LOWER('OPÇÃO') AS Minusculos; 

## Pega quantas letras tu colocar
SELECT SUBSTRING('constitucionalmente', 5, 10) AS Sub; 

## Troca a palavra
SELECT REPLACE('Olá Mundo', 'Mundo', 'pessoa') AS NovaString;

## Tirar espaço em branco do meio e do final
SELECT TRIM("  Olá   ") AS Tirar_Espaço;

## Mostra a posição da letra
SELECT LOCATE('o', 'Hello') AS Posição;

## Adiciona uma vírgula depois de cada palavra 
SELECT CONCAT_WS(',', 'Maça', ' Banana', ' Morango') AS Frutas;

## Seleciona as letras a direita e a esquerda
SELECT LEFT('MySQL', 2) AS Esquerda;
SELECT RIGHT('MySQL', 3) AS Direita;

## Inverte a string
SELECT REVERSE('paralelepipedo') AS Inverter;