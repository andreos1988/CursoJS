select * from estados;

select sigla, nome as 'Nome do Estado' from estados
where regiao='Sul'

SELECT nome, regiao from `estados`
where populacao>= 10
order by populacao desc