-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2021 at 02:18 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_chat_data`
--

CREATE TABLE `user_chat_data` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiever_id` int(11) NOT NULL,
  `message` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_chat_data`
--

INSERT INTO `user_chat_data` (`id`, `sender_id`, `receiever_id`, `message`) VALUES
(1, 17, 5, 'hi admin'),
(2, 5, 17, 'hi demo try'),
(3, 5, 29, 'admin check to all'),
(4, 5, 17, 'admin check to all'),
(5, 5, 9, 'admin check to all'),
(6, 5, 17, 'hiii im demo need yr time'),
(7, 17, 5, 'yaa admin tell me im free'),
(8, 17, 5, 'hii im demo'),
(9, 5, 17, 'hi demo I\'m busy right now'),
(10, 17, 29, 'hi'),
(11, 17, 5, 'hi new admin congo'),
(12, 5, 17, 'thanks demo'),
(13, 17, 5, 'admin localstorage'),
(14, 5, 17, 'ya let me check'),
(15, 5, 17, 'by refreshing the page'),
(16, 29, 9, 'what is this?'),
(17, 17, 17, 'demo try'),
(18, 29, 5, 'hi new admin'),
(19, 5, 29, 'hi raj'),
(20, 5, 29, 'raj'),
(21, 5, 29, 'hi'),
(22, 17, 5, 'hi session check mister'),
(23, 5, 17, 'checking me too brother'),
(24, 17, 5, 'oh okay lol\n'),
(25, 17, 5, 'hi'),
(26, 5, 17, 'hi'),
(27, 17, 5, 'all working fine?'),
(28, 17, 9, 'all working fine?'),
(29, 17, 29, 'all working fine?'),
(30, 5, 17, 'hi demo im admin'),
(31, 17, 5, 'hiii admin im demo'),
(32, 17, 5, '123'),
(33, 5, 17, 'abc'),
(34, 17, 5, 'hiii admin'),
(35, 5, 17, 'hiiii demooooooo'),
(36, 17, 5, 'hi admin hello'),
(37, 5, 17, 'hello demo iim fine tell me'),
(38, 9, 29, 'hi raj its cus3'),
(39, 29, 9, 'hi cus3 im raj '),
(40, 29, 9, 'what do you want?'),
(41, 29, 9, 'thanks'),
(42, 9, 29, 'i was just wishing you'),
(43, 29, 9, 'okay fine have a good day'),
(44, 17, 5, 'hi'),
(45, 17, 9, 'hi'),
(46, 9, 17, 'all fine thanks'),
(47, 5, 9, 'hi'),
(48, 9, 5, 'hi'),
(49, 17, 9, 'its cus3 hi'),
(50, 17, 5, 'hi'),
(51, 17, 9, '123'),
(52, 17, 5, '1'),
(53, 5, 17, '2'),
(54, 17, 5, '3'),
(55, 5, 17, '4'),
(56, 17, 5, '5'),
(57, 5, 9, 'hi123'),
(58, 5, 17, 'hi123'),
(59, 17, 5, 'hi'),
(60, 5, 17, 'hi'),
(61, 17, 9, 'hi'),
(62, 5, 17, 'hi demo try'),
(63, 9, 5, 'hi admin bhai'),
(64, 17, 5, 'to all mem broad'),
(65, 17, 9, 'to all mem broad'),
(66, 5, 9, 'hi cus im admin'),
(67, 9, 17, 'to broad'),
(68, 9, 5, 'to broad'),
(69, 17, 9, 'hi cus3'),
(70, 5, 9, 'hi cus3'),
(71, 17, 5, 'hi admin'),
(72, 5, 17, 'hi demo try'),
(73, 9, 5, 'hi'),
(74, 9, 5, 'hi'),
(75, 9, 5, 'hi'),
(76, 17, 5, 'hi im demo uh admin?'),
(77, 17, 9, 'hi'),
(78, 17, 5, 'hi'),
(79, 17, 5, 'hi'),
(80, 17, 5, 'hi'),
(81, 5, 9, 'hi'),
(82, 5, 17, 'hi'),
(83, 5, 9, 'hi'),
(84, 5, 9, 'hi'),
(85, 9, 17, 'hi'),
(86, 9, 17, 'hi again'),
(87, 9, 17, 'hi 2'),
(88, 9, 17, 'ihi 3'),
(89, 5, 17, 'hij1'),
(90, 5, 9, 'hi all'),
(91, 5, 17, 'demo try'),
(92, 5, 9, 'hi ti cus3'),
(93, 17, 5, 'hi'),
(94, 17, 5, 'hi'),
(95, 17, 5, 'hi'),
(96, 17, 5, 'ih'),
(97, 17, 5, 'hini'),
(98, 17, 5, 'iii'),
(99, 17, 5, 'hi'),
(100, 17, 5, '1'),
(101, 17, 5, '2'),
(102, 17, 5, '1\n'),
(103, 17, 5, '2'),
(104, 17, 5, '1'),
(105, 5, 17, 'hi'),
(106, 17, 5, '1'),
(107, 17, 5, '2'),
(108, 17, 5, 'hi'),
(109, 17, 5, 'hi123'),
(110, 17, 5, '1\n'),
(111, 17, 5, '2'),
(112, 17, 5, '1'),
(113, 17, 5, '2'),
(114, 17, 5, '1'),
(115, 5, 17, '1\n'),
(116, 17, 5, '1'),
(117, 17, 5, '2'),
(118, 17, 5, '1'),
(119, 17, 5, '2'),
(120, 17, 5, '1'),
(121, 17, 5, '2'),
(122, 17, 5, '1'),
(123, 17, 5, '2'),
(124, 17, 5, '1'),
(125, 17, 5, '2'),
(126, 17, 5, '1'),
(127, 17, 5, '2'),
(128, 17, 5, '1'),
(129, 17, 5, '2'),
(130, 17, 5, '1'),
(131, 17, 5, '2'),
(132, 17, 5, 'abc'),
(133, 17, 5, 'xyz'),
(134, 17, 5, '1'),
(135, 17, 5, '2'),
(136, 17, 5, '1'),
(137, 17, 5, '2'),
(138, 17, 5, '3 hi'),
(139, 17, 5, '5'),
(140, 17, 5, '1'),
(141, 17, 5, '2'),
(142, 17, 5, '3'),
(143, 17, 5, '4'),
(144, 17, 5, '5'),
(145, 5, 17, 'all good?'),
(146, 17, 5, '1'),
(147, 17, 5, '2'),
(148, 5, 17, '1'),
(149, 5, 17, '2'),
(150, 17, 5, 'admin 786'),
(151, 5, 17, 'demo 786'),
(152, 5, 17, 'hi'),
(153, 5, 17, 'hi bhai demo'),
(154, 17, 5, 'mst ho bhai ek dam '),
(155, 5, 17, 'ha bhai to thik ho'),
(156, 17, 5, 'hi'),
(157, 5, 9, 'hi'),
(158, 5, 9, 'how to you do cus3'),
(159, 9, 5, 'gg'),
(160, 5, 9, 'gg to you too'),
(161, 5, 17, 'hi to all'),
(162, 5, 9, 'hi to all'),
(163, 5, 17, 'hi'),
(164, 17, 5, 'hi'),
(165, 5, 17, 'how are you'),
(166, 17, 5, 'hi'),
(167, 5, 17, 'hi to you'),
(168, 17, 5, 'same to you all'),
(169, 17, 5, 'what happed?'),
(170, 9, 17, 'hi all its cus3 to all say good evering'),
(171, 9, 5, 'hi all its cus3 to all say good evering'),
(172, 9, 17, 'again hi'),
(173, 9, 5, 'again hi'),
(174, 17, 9, 'to all'),
(175, 17, 5, 'to all'),
(176, 17, 5, 'to al'),
(177, 17, 9, 'to al'),
(178, 17, 5, 'hi to all'),
(179, 5, 17, 'check'),
(180, 17, 5, '123'),
(181, 9, 17, 'ch'),
(182, 9, 5, 'ch'),
(183, 17, 9, 'to cus3 form demo'),
(184, 9, 17, 'to demo from cus3'),
(185, 17, 5, 'to all'),
(186, 17, 9, 'to all'),
(187, 5, 9, 'cus3'),
(188, 5, 17, 'hi'),
(189, 17, 5, 'hi'),
(190, 17, 5, 'hi555'),
(191, 17, 5, 'adminnnnnn'),
(192, 17, 5, 'hif2'),
(193, 5, 17, 'hia1'),
(194, 5, 17, 'hi'),
(195, 5, 17, '123ABC'),
(196, 17, 5, '789XYZ'),
(197, 17, 5, '1'),
(198, 17, 5, '2'),
(199, 17, 5, '3'),
(200, 5, 17, 'a'),
(201, 5, 17, 'b'),
(202, 5, 17, 'c'),
(203, 5, 17, 'demo.....'),
(204, 5, 17, 'demo normal'),
(205, 5, 17, 'yes!!!'),
(206, 17, 5, 'yes2'),
(207, 17, 5, 'hi'),
(208, 5, 17, 'broad test'),
(209, 17, 5, 'hi'),
(210, 17, 5, 'hello'),
(211, 5, 17, 'brod test'),
(212, 5, 17, 'hi'),
(213, 17, 5, 'hi'),
(214, 5, 17, 'chek'),
(215, 17, 5, 'to all'),
(216, 5, 17, 'to all'),
(217, 5, 17, 'again check'),
(218, 5, 17, 'hi'),
(219, 17, 5, 'check'),
(220, 17, 5, 'h123'),
(221, 5, 17, 'n123'),
(222, 17, 5, 'bbcc'),
(223, 17, 5, 'tp admin'),
(224, 5, 17, 'to demo'),
(225, 17, 5, 'brod from demo'),
(226, 17, 5, 'hi'),
(227, 5, 17, 'random check by demo'),
(228, 17, 5, 'l check from demo'),
(229, 5, 17, 'l check broad'),
(230, 17, 5, 'from demo111'),
(231, 5, 17, 'from adminnnnnnnn'),
(232, 17, 5, ',bn'),
(233, 17, 5, '1'),
(234, 17, 5, '2'),
(235, 17, 5, '1'),
(236, 17, 5, '2'),
(237, 17, 5, '3'),
(238, 17, 5, '4'),
(239, 17, 5, '5'),
(240, 17, 5, '6'),
(241, 17, 5, '7'),
(242, 17, 5, 'hzx'),
(243, 5, 17, 'ex 1'),
(244, 5, 17, '1'),
(245, 17, 5, '2'),
(246, 5, 17, '123zxc'),
(247, 5, 17, 'via sequilize?'),
(248, 17, 5, 'yes'),
(249, 5, 17, 'via mongoose?'),
(250, 17, 5, 'yes via mongoose'),
(251, 5, 17, 'okay'),
(252, 17, 5, 'bm'),
(253, 17, 5, 'ready to check?'),
(254, 17, 5, 'okay'),
(255, 17, 5, 'yup'),
(256, 17, 5, 'normal'),
(257, 5, 17, 'got it'),
(258, 17, 5, 'borad'),
(259, 17, 5, 'normal'),
(260, 5, 17, 'cool'),
(261, 17, 5, 'cool to all'),
(262, 17, 5, '1'),
(263, 5, 17, '2'),
(264, 17, 5, '12'),
(265, 5, 17, '23'),
(266, 17, 5, 'hi'),
(267, 17, 5, '1'),
(268, 5, 17, '2'),
(269, 17, 5, '123'),
(270, 17, 5, 'to all'),
(271, 5, 17, 'o all'),
(272, 5, 17, ''),
(273, 5, 17, 'low check'),
(274, 17, 5, 'checked'),
(275, 5, 17, 'ready to broadcast?'),
(276, 17, 5, 'ready'),
(277, 5, 17, 'low 1'),
(278, 17, 5, 'lo 2'),
(279, 5, 17, 'bbm'),
(280, 5, 17, '1'),
(281, 5, 17, 'hi'),
(282, 17, 5, 'hello'),
(283, 5, 17, 'check123'),
(284, 5, 17, '123123'),
(285, 5, 17, 'hi123'),
(286, 5, 17, '123'),
(287, 17, 5, 'ram ram'),
(288, 5, 17, 'ha bhai bol'),
(289, 5, 17, 'maja ma all?'),
(290, 17, 5, 'to all'),
(291, 5, 17, 'hi'),
(292, 17, 5, 'to all'),
(293, 5, 17, 'welcome'),
(294, 17, 5, 'thanks admin'),
(295, 5, 17, 'welcome'),
(296, 5, 17, 'try'),
(297, 17, 5, 'okie'),
(298, 17, 5, 'to chk'),
(299, 17, 5, 'again check'),
(300, 5, 17, 'heck it now'),
(301, 5, 17, 'my all fav'),
(302, 17, 5, 'stay'),
(303, 17, 5, 'try me now'),
(304, 5, 17, 'worked?'),
(305, 17, 5, 'ig yse'),
(306, 5, 17, 'now try normal one'),
(307, 17, 5, 'okie'),
(308, 29, 5, 'hi'),
(309, 5, 29, 'hello'),
(310, 17, 5, 'to all'),
(311, 17, 29, 'to all'),
(312, 5, 29, 'raj'),
(313, 29, 5, 'to admin'),
(314, 5, 17, 'to all'),
(315, 5, 29, 'to all'),
(316, 17, 5, 'hi admin'),
(317, 5, 29, 'hi'),
(318, 17, 5, 'hi'),
(319, 17, 5, 'hi'),
(320, 5, 17, 'hi'),
(321, 5, 17, 'check 123'),
(322, 5, 17, '123'),
(323, 5, 17, '123123'),
(324, 5, 17, '123'),
(325, 5, 17, '456');

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`id`, `name`, `email`, `password`) VALUES
(1, 'Raj Gohil', 'raj.gohil@gmail.com', '$2b$10$BZJaGfYG2tkRGgmBDzWxV.nYV7zAP21Tc5syU1qMImjIKgx3INklK'),
(3, 'Raj Gohil', 'raj.famous007@gmail.co', '$2b$10$BZJaGfYG2tkRGgmBDzWxV.nYV7zAP21Tc5syU1qMImjIKgx3INklK'),
(4, 'Raj Gohil admin', 'rafamous007@gmail.com', '$2b$10$Yla9ReyB5Sn6f4aHLksSnuV7t4XaEu5sc6d7HyZUpc9Hk0pHOytNS'),
(5, 'new admin 1st', 'raj.e@gmail.com', '$2b$10$o9FKUEphb/JRyRAXDIZANuSIswuhOINfQzaIpioL7zg2omhFEnxGC'),
(6, 'new admin 2nd', 'j.famous007@gmail.com', '$2b$10$WUOUNtQFOTYC1ZP73BuOu.nGAFe7ujGz/fTJzbS5oy.XasYOSb1SS'),
(7, 'form tatvasoft', 'customer1@mail.com', '$2b$10$dEJ8dGuSNTdDzG9rA.5ls.mkgy7fe/xPbq1iccCpWU/6IAIIYQMWS'),
(8, 'customer 2', 'customer2@mail.com', '$2b$10$Hz1qridd8XjUHo6PrlbjhORuBE4yh4H8bq4ej28csXZzhUsS04pDa'),
(9, 'customer 3', 'customer3@mail.com', '$2b$10$v16AeEypyPjJGUDwCmP5P.TztAgogOPjx1/vMcd.4VG3cnBQ/bU9C'),
(10, 'customer 4 try', 'customer3@mail.inn', '$2b$10$mW/BRJtbEcs6CXObyEXXVeQbyl3lz/aNqsNeKWhPCPeXkyTTVFpFW'),
(11, 'admin try try', 'admin try try', '$2b$10$EcRWBnApp3wJ1PEieEnex.TQdHxLUCZA60KXO3H1rAhx8biL6qUvS'),
(12, 'customer try try', 'customer try try', '$2b$10$UAaivqB.58zNzL7a.vVJXOdy4xnovVKOlnBZ7PaOfPKCXkLC1R5dC'),
(13, 'admina admin', 'admin@123', '$2b$10$drBbTncVmggiiwiI8V9cMeqSkxjcjTZrtYexAincScaKNhJ0DfWVe'),
(14, 'cus customer', 'cus@123', '$2b$10$5dJbcCztY8pku10/DzcT6OFtjDdAbz0U1KfdHzo5Vhxzghcjf8I3q'),
(15, 'admin may be last', 'lastadmin@gmail', '$2b$10$UjeK/3jIN2TritxV39CdDu.LqvIXykLLv03q0Hq7vaRz6QRMIjD3e'),
(16, 'may be last customer', 'lastcusto@123', '$2b$10$Rn.aDWxAegu3pgnyZ9A6FuNetRvTEZoHK8TAlFjrSK2FpXqssfulm'),
(17, 'demo try', 'super@gmail', '$2b$10$dSPybLjpYsEIxiSrSgzeVeaIdlLUQgWxqclBQjUEvtsebbeQ32B6q'),
(18, 'going to add customer form admin', 'aaa@gmail.com', '$2b$10$OXI3MLunbzKA.HEhcOzur.k21p5z5BfT4dH3gAT6sxyTY4.Lz5O4S'),
(19, 'admin entry from  super admin', 'adada@123', '$2b$10$rFsznj7puzdCuAf/eBkAuOU/UdG20meU/.wzKY3VJ2JPiY/2e75SW'),
(20, '123', '123@gmail.com', '$2b$10$hJHcN0gI/y74UYgv3uTPweP2q6L3K2eopFoNC5RP4XddIWbdqGyim'),
(21, '123456', '123@gmail.in', '$2b$10$VYGzo4gEF4Hd.szczKtFa.WdH1xTHtTOoqLoUrx91OXJf6ull7uda'),
(22, 'working', 'wprk@gmail.com', '$2b$10$fW0FJoBULVvkNbvEUQurleiFsETc/bdxSu2tjwaEDGGVbc43TKSj.'),
(23, '123123213', '1231232@gmail.com', '$2b$10$sTs.qtB4QgMpoVM.8uoMmuPzQNI0fFjCEQsqF4TOek4A5zPa7Pliq'),
(24, 'Raj Gohil', 'raj.fffamous007@gmail.com', '$2b$10$gHAKIzGSyoUpOQ2FRA2N/e7ZhOSR2l2fcMAY3butWRvvQ3yZaWccO'),
(25, 'Raj Gohil', 'rj.famous007@gmail.com', '$2b$10$r/5xrF/0AoPOdB4i2FPu8OtAxNeCniUmt.K971ex8eBrxavzhKleS'),
(26, 'admin from cus3 ', 'cusc@gmail.com', '$2b$10$vqlxb815p3x51uQ9xHNKTuSIdUmG1WJ2RH6I2rSHW15Iirw5Y1e2y'),
(27, 'bhai bhai bhai', 'bhai@123gmail.com', '$2b$10$T5ZbXfLN4RJ2gkIKROhE7.4KWBBcAqHcq7NO.xeux8Z21V0dsSJPG'),
(28, 'admin here final try', 'adminhere@gmail.com', '$2b$10$6GHczTYYm4OjWfE0va7OvelEP2mhHATd82A8J/AEsUN385Jj2VItS'),
(29, 'Raj Gohil', 'raj.famous007@gmail.com', '$2b$10$/zi/ZNPr3Rm8esNHXEovd.DrGXMIVzfpTXg52xNS7legMLjaAqjQq'),
(30, 'betav1', 'beta@gmail.com', '$2b$10$iJ2ScECwlT0sQaYYwNjwKuyd07E0KHGT05z6.C3LAHHNGMReoMAqC'),
(31, 'customoer form admin', 'admincustomer@gmai.ci', '$2b$10$mRM7sHcBMIYKqCU8Y4UzlOCIfChWlErgwfSLspsfhUPtmLwhZmjSS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_chat_data`
--
ALTER TABLE `user_chat_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiever_id` (`receiever_id`);

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_chat_data`
--
ALTER TABLE `user_chat_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=327;

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_chat_data`
--
ALTER TABLE `user_chat_data`
  ADD CONSTRAINT `user_chat_data_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `user_data` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_chat_data_ibfk_2` FOREIGN KEY (`receiever_id`) REFERENCES `user_data` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
