-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Abr-2025 às 19:32
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `loja_livros`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `livros`
--

CREATE TABLE `livros` (
  `id` int(11) NOT NULL,
  `imagem` longtext NOT NULL,
  `nome` varchar(150) NOT NULL,
  `descricao` text NOT NULL,
  `avaliacao` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `livros`
--

INSERT INTO `livros` (`id`, `imagem`, `nome`, `descricao`, `avaliacao`) VALUES
(1, 'https://www.planetadelivros.com.br/usuaris/libros/fotos/168/m_libros/portada_o-vendedor-de-sonhos-o-chamado_augusto-cury_201505260924.jpg', 'O Vendedor de Sonhos', 'Um homem maltrapilho e desconhecido tenta impedir que um intelectual se suicide. Um desafio que nem a polícia nem um famoso psiquiatra tinham sido capazes de resolver. Depois de abalá-lo e resgatá-lo, esse homem, de quem ninguém sabe a origem, o nome ou a história, sai proclamando aos quatro ventos que as sociedades modernas se converteram em um hospício global. Com uma eloquência cativante, começa a chamar seguidores para vender sonhos em uma sociedade que deixou de sonhar.', '5'),
(2, 'https://tse1.mm.bing.net/th/id/OIP.LiI8EZG_NJH2jOewKIKJ_QHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7', 'O Falso Paraíso', 'Dizem que quando o filho é rejeitado mesmo antes de nascer, ele sente na barriga… Se foi por isso ou não, Miguel nasceu surdo e mudo. Sofria vários tipos de bullying pelos próprios pais e irmão. E todos que se aproximavam dele, de alguma forma, também eram afetados. A família de Miguel vivia de aparência. Os pais dele eram pastores e tinham que mostrar para as pessoas o modelo de Família Perfeita, como se o lar deles fosse um paraíso! Prepare-se, pois você irá se impactar com a jornada de vida do sonhador Miguel.', '5'),
(3, 'https://tse2.mm.bing.net/th/id/OIP.p2VpOY7fwth06Eroac7QOQHaLF?w=132&h=198&c=7&r=0&o=5&pid=1.7', 'O Deus que Destrói Sonhos', '\r\nUma tentação constante que cerca a vida cristã é a inversão do chamado: a presunção de que Deus precisa abençoar nosso caminho e seguir nossos planos e sonhos. Essa postura é enganosa e faz parecer que Deus só é fiel quando nos abençoa. Mas e se Deus derrubar o nosso sorvete, ele deixa de ser fiel? Claro que não! Ele continua sendo um Pai sábio e um Deus misericordioso mesmo em meio às nossas frustrações. Às vezes, ele só quer chamar nossa atenção para o caminho certo. Você já deve ter testemunhado gente adulta se comportando como criança por não ter a vida que pediu a Deus. É porque pediu errado!', '5'),
(4, 'https://a-static.mlcdn.com.br/800x560/livro-o-diario-de-anne-frank-edicao-oficial/magazineluiza/088658400/b234e3fbfd98011556d34163285b84df.jpg', 'O Diário de Anne Frank', 'O Diário de Anne Frank é mais do que apenas um registro pessoal; é um testemunho visceral da perseguição enfrentada por milhões de judeus durante a Segunda Guerra Mundial.\r\nEscrita por Anne Frank enquanto se escondia dos nazistas em um anexo secreto em Amsterdã, esta obra captura a essência da luta pela sobrevivência e a busca incessante por esperança em tempos sombrios.', '5');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `livros`
--
ALTER TABLE `livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
