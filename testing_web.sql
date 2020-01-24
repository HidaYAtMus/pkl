-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Jan 2020 pada 18.36
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing_web`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `record`
--

CREATE TABLE `record` (
  `id` int(11) NOT NULL,
  `nama_web` varchar(50) NOT NULL,
  `fitur` varchar(50) NOT NULL,
  `hasil` varchar(50) NOT NULL,
  `tanggal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `record`
--

INSERT INTO `record` (`id`, `nama_web`, `fitur`, `hasil`, `tanggal`) VALUES
(1, 'YouTube', 'undefined', 'passed', '0000-00-00'),
(2, 'YouTube', 'undefined', 'passed', '2020-01-22'),
(3, 'YouTube', 'undefined', 'passed', '2020-01-22'),
(4, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-22'),
(5, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(6, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-22'),
(7, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-22'),
(8, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-22'),
(9, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(10, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(11, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(12, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-22'),
(13, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(14, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(15, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(16, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-22'),
(17, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(18, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(19, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(20, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-22'),
(21, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-22'),
(22, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-22'),
(23, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(24, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-23'),
(25, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(26, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(27, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(28, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-23'),
(29, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(30, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(31, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(32, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(33, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(34, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(35, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(36, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(37, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(38, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(39, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(40, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(41, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(42, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-23'),
(43, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(44, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(45, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(46, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(47, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(48, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(49, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(50, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(52, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(53, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-24'),
(54, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-24'),
(55, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-25'),
(56, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(57, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(58, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(59, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(60, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(61, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(62, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-25'),
(63, 'YouTube', 'click_searchtxtbox', 'fai', '2020-01-25'),
(64, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(65, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(66, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-25'),
(67, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(68, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(69, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(70, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(71, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(72, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(73, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-25'),
(74, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(75, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(76, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(77, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(78, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(79, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(80, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(81, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(82, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(83, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-25'),
(84, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(85, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(86, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(87, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(88, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(89, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(91, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(92, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-25'),
(93, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(94, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(95, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(96, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-25'),
(97, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(98, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(99, 'YouTube', 'click_searchtxtbox', 'passed', '2020-01-26'),
(100, 'YouTube', 'click_searchtxtbox', 'fail', '2020-01-26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `report`
--

CREATE TABLE `report` (
  `id` int(50) NOT NULL,
  `nama_web` varchar(50) NOT NULL,
  `hasil` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `report`
--

INSERT INTO `report` (`id`, `nama_web`, `hasil`) VALUES
(2, 'YouTube', 'passed'),
(3, 'YouTube', 'passed'),
(4, 'YouTube', 'passed'),
(5, 'YouTube', 'fail'),
(6, 'YouTube', 'fail');

-- --------------------------------------------------------

--
-- Struktur dari tabel `vid_divmu`
--

CREATE TABLE `vid_divmu` (
  `id` int(11) NOT NULL,
  `nama_web` varchar(50) NOT NULL,
  `hasil` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `vid_divmu`
--

INSERT INTO `vid_divmu` (`id`, `nama_web`, `hasil`) VALUES
(1, 'pindad', 'passed'),
(2, 'pindad', 'fail'),
(3, 'pindad', 'fail'),
(4, 'pindad', 'fail'),
(5, 'pindad', 'fail'),
(6, 'pindad', 'fail'),
(7, 'pindad', 'fail'),
(8, 'pindad', 'passed');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `vid_divmu`
--
ALTER TABLE `vid_divmu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `record`
--
ALTER TABLE `record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT untuk tabel `report`
--
ALTER TABLE `report`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `vid_divmu`
--
ALTER TABLE `vid_divmu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
