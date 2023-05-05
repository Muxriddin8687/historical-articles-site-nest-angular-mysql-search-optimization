-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 05 2023 г., 13:56
-- Версия сервера: 10.4.25-MariaDB
-- Версия PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `history`
--

-- --------------------------------------------------------

--
-- Структура таблицы `about_us`
--

CREATE TABLE `about_us` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `telegram` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `about_us`
--

INSERT INTO `about_us` (`id`, `text`, `email`, `phone`, `telegram`) VALUES
(1, 'Tarixiy onlar  - Yuragi bo\'shlar, asab kasallari va jinoyatchilikga moyil insonlar kirishi qatiyan man etiladi❗️', 'nickname.8687.@gmail', '+998930939200', 't.me/@tg_link');

-- --------------------------------------------------------

--
-- Структура таблицы `area`
--

CREATE TABLE `area` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `area`
--

INSERT INTO `area` (`id`, `name`, `date`) VALUES
(1, 'O\'zbekiston', '2023-05-02 12:00:17'),
(2, 'Rossiya', '2023-05-02 12:00:17'),
(7, 'Germanya', '2023-05-04 09:04:04'),
(8, 'Turkiya', '2023-05-04 09:04:17'),
(9, 'London', '2023-05-04 09:05:10'),
(10, 'Amerika', '2023-05-04 09:05:23');

-- --------------------------------------------------------

--
-- Структура таблицы `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `area_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `descriptions` text NOT NULL,
  `text` text NOT NULL,
  `years` text NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `article`
--

INSERT INTO `article` (`id`, `category_id`, `group_id`, `area_id`, `author_id`, `title`, `descriptions`, `text`, `years`, `date`) VALUES
(1, 1, 2, 1, 1, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsum!', 'Lorem ipsum dolor, sit amet consectetur adipisicing.', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae illum sunt saepe qui deleniti temporibus laborum in ut nihil unde excepturi possimus sit, harum quam quia quas, velit, esse cupiditate minima quos earum corrupti voluptates. Iste porro, adipisci, illum accusamus fuga aliquam nihil magnam eligendi voluptate voluptatum non, qui cum? Numquam vel similique, earum eveniet animi omnis ab cumque, officia dolores, aperiam autem? Numquam, beatae obcaecati? Corporis reiciendis ipsum veniam laborum recusandae dolor illo dolore suscipit consequatur ducimus, deleniti quasi tempore sed. JS Jamka Fazilat Quia et cupiditate dolores. Omnis, aspernatur illo perspiciatis unde esse, mollitia distinctio possimus doloremque aliquam quibusdam neque et?</p>', '2000 2001 1945', '2023-05-03'),
(2, 1, 6, 1, 2, 'Chorsu bozori', '', '<p style=\"text-align:center\"><img src=\"https://mdbootstrap.com/img/Photos/Others/images/76.jpg\" alt=\"\" title=\"\" width=\"787px\"></p><p>Toshkentdagi Chorsu bozorining gavjum rastalari, 1994-yil.</p>', '1994', '2023-05-05');

-- --------------------------------------------------------

--
-- Структура таблицы `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `author`
--

INSERT INTO `author` (`id`, `name`, `email`, `phone`, `date`) VALUES
(1, 'Ali', 'test@test.com', '+998998090808', '2023-05-02 12:50:01'),
(2, 'Nick', 'nickname.8687.@gmail', '+998930939200', '2023-05-04 09:32:43');

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name`, `date`) VALUES
(1, 'Ijtimoiy', '2023-05-03 11:20:46'),
(2, 'Sport', '2023-05-03 11:20:46'),
(3, 'San\'at', '2023-05-04 09:17:38'),
(4, 'Musiqa', '2023-05-04 09:17:53');

-- --------------------------------------------------------

--
-- Структура таблицы `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `group`
--

INSERT INTO `group` (`id`, `name`, `date`) VALUES
(2, 'Asar', '2023-05-02 11:59:50'),
(4, 'Urush', '2023-05-04 09:15:19'),
(5, 'Qurilish', '2023-05-04 09:15:25'),
(6, 'Iqtisotiyot', '2023-05-04 09:15:34'),
(7, 'Biografiya', '2023-05-04 09:16:14');

-- --------------------------------------------------------

--
-- Структура таблицы `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `file` varchar(32) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `name`, `email`, `phone`, `file`, `date`) VALUES
(1, 'ali', 'test@gmail.com', '+998999090909', '999296610.docx', '2023-05-02'),
(4, 'ali', 'asa@asd.com', '23232323', '766243787.docx', '2023-05-03'),
(5, 'Muxriddin', 'nickname.8687.@gmail', '+998930939200', '617930405.docx', '2023-05-03'),
(6, 'Nick', 'nickname.8687.@gmail', '+998999678687', '549205203.docx', '2023-05-03');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `password`) VALUES
(1, 'admin', '123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `area_id` (`area_id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `group_id` (`group_id`),
  ADD KEY `category_id` (`category_id`);
ALTER TABLE `article` ADD FULLTEXT KEY `title` (`title`,`text`,`descriptions`,`years`);

--
-- Индексы таблицы `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `area`
--
ALTER TABLE `area`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `area` (`id`),
  ADD CONSTRAINT `article_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  ADD CONSTRAINT `article_ibfk_3` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`),
  ADD CONSTRAINT `article_ibfk_4` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
