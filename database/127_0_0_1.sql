-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2024 at 02:53 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taskmanageapp`
--
CREATE DATABASE IF NOT EXISTS `taskmanageapp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `taskmanageapp`;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('test101@gmail.com', '$2y$12$v38pXsDMSoQ8mXVxAFhJD.J1wLYo0rYR15r7hwvfLQp5psSq6MJQm', '2024-01-31 04:03:02');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(16, 'App\\Models\\User', 5, 'api-token', 'af88b801a396fdbfaae430d8f8555cae7e59bce6e5d1235c93ea9a2a4586e394', '[\"*\"]', NULL, NULL, '2024-01-31 04:37:55', '2024-01-31 04:37:55'),
(17, 'App\\Models\\User', 6, 'api-token', 'b654f78a167d575f1ad3d6f9eae773e89f1b9afc4e8a6ede4a7252f309984031', '[\"*\"]', NULL, NULL, '2024-01-31 04:38:28', '2024-01-31 04:38:28'),
(18, 'App\\Models\\User', 7, 'api-token', 'd2b4b1b9126ee5b3d2f44d93edcf58a81d4063308ef413cacf5d3405abee7780', '[\"*\"]', NULL, NULL, '2024-01-31 04:43:12', '2024-01-31 04:43:12'),
(24, 'App\\Models\\User', 2, 'api-token', 'edc5cf67f10c6c16df52d15dc68541587a942c7fe713cb97324b28d082994f4d', '[\"*\"]', NULL, NULL, '2024-01-31 05:33:55', '2024-01-31 05:33:55'),
(100, 'App\\Models\\User', 8, 'api-token', 'b840527befcf4f7ee50f214b8c76637dd271ec8289f46bed0c362e50e7ee1e1a', '[\"*\"]', NULL, NULL, '2024-01-31 12:48:23', '2024-01-31 12:48:23'),
(119, 'App\\Models\\User', 10, 'api-token', '586ad5825e44d0564118322456188dd7ae59dcda34b81495c2b1cf64859b686c', '[\"*\"]', NULL, NULL, '2024-01-31 20:30:02', '2024-01-31 20:30:02'),
(131, 'App\\Models\\User', 11, 'api-token', '5f172e16fb66ec5d5db3a7df30b6fbe091cf82b42d14bc7ac740e62aedd11280', '[\"*\"]', NULL, NULL, '2024-01-31 21:39:36', '2024-01-31 21:39:36'),
(176, 'App\\Models\\User', 1, 'api-token', 'd5fa63d1496bd347d0c39c3859a188ce8f7a4be4020e054e1267a3bfa98e9360', '[\"*\"]', NULL, NULL, '2024-02-01 02:01:14', '2024-02-01 02:01:14'),
(200, 'App\\Models\\User', 12, 'api-token', 'db79bb36ff51da10fd9580bc3667da1539f23ea7df18e333cd4f3bcc91896909', '[\"*\"]', NULL, NULL, '2024-02-01 05:04:34', '2024-02-01 05:04:34'),
(202, 'App\\Models\\User', 13, 'api-token', '1c63f38046a52567ee982f57729648641cec67a8aaac8b1a3936e6ad7333285e', '[\"*\"]', NULL, NULL, '2024-02-01 05:09:05', '2024-02-01 05:09:05'),
(203, 'App\\Models\\User', 14, 'api-token', '03b1b637e498f68e20884751daea33e3f73bcfef605024aa16e4cbbea2de832d', '[\"*\"]', NULL, NULL, '2024-02-01 05:10:17', '2024-02-01 05:10:17'),
(204, 'App\\Models\\User', 15, 'api-token', '1f14266c9266de8df45418e0137bd2f6911d94b2d02f564bd18d2a4f9bc43758', '[\"*\"]', NULL, NULL, '2024-02-01 05:18:48', '2024-02-01 05:18:48'),
(206, 'App\\Models\\User', 16, 'api-token', '8978562c595be1592fba551e51fd700ed3fd55c29266b5deda6d775629292849', '[\"*\"]', NULL, NULL, '2024-02-01 05:20:42', '2024-02-01 05:20:42'),
(209, 'App\\Models\\User', 9, 'api-token', '517c6f601665b83238fcf8d681e1f3225eb24071ed0c90bcb92cea309283b301', '[\"*\"]', NULL, NULL, '2024-02-01 08:13:53', '2024-02-01 08:13:53');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `due_date` date NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `userID` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `status`, `due_date`, `created_at`, `updated_at`, `userID`) VALUES
(11, 'sample 4', 'sample 4', 'Completed', '2024-02-01', '2024-01-31 23:36:35', '2024-01-31 23:36:35', 9),
(12, 'sample 5', 'sample 5', 'Important', '2024-02-29', '2024-01-31 23:37:26', '2024-01-31 23:37:26', 9),
(16, 'sample jhone 1', 'sample jhone 1', 'Completed', '2024-02-22', '2024-02-01 00:26:40', '2024-02-01 00:26:40', 1),
(20, 'sample 6', 'new add task', 'In Progress', '2024-02-23', '2024-02-01 02:00:55', '2024-02-01 02:00:55', 1),
(26, 'New test 1', 'sample description 2', 'In Progress', '2024-02-23', '2024-02-01 05:05:00', '2024-02-01 05:05:25', 12);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', 'john@example.com', NULL, '$2y$12$pYQuEwSV/yFMfuNTX2zbZebi7A33/xvM7l62j/LCkZiXJw82K3g5i', NULL, '2024-01-30 13:21:44', '2024-01-30 13:21:44'),
(2, 'sameera prasantha', 'test101@gmail.com', NULL, '$2y$12$eYCZf8bd7Wu7wSeJb8oX.uMBZUOSRu46xw5MGQ0DI0CotVyc2sA6q', NULL, '2024-01-30 13:22:47', '2024-01-30 13:22:47'),
(5, 'sameeraasd prasantha', 'testasd101@gmail.com', NULL, '$2y$12$TOm9a1MFJ6TaWq6j7SxuW.A8Esarowq7V/PYSM4.i4WG.7AhkGmCO', NULL, '2024-01-31 04:37:55', '2024-01-31 04:37:55'),
(6, 'sameeasdaraasd prasantha', 'testasd101@gmasdail.com', NULL, '$2y$12$lQu0XSEHGqYuspYdXl7m9OEIjZ683d1Fg9EjcRc.KLUOONL1loZaO', NULL, '2024-01-31 04:38:28', '2024-01-31 04:38:28'),
(7, 'kamal', 'banadara@gmail.com', NULL, '$2y$12$JKn/7jr2vA60C71STLpaWubOFi7qZiDYQ8FXctgpDSD.BelTQIKEG', NULL, '2024-01-31 04:43:12', '2024-01-31 04:43:12'),
(8, 'Test 01', 'test4101@gmail.com', NULL, '$2y$12$hgmqg3fBeJWvyY3At270X.PFMZB8lgrrxnYXRN.1hNFaaUF7TI9Q2', NULL, '2024-01-31 05:49:30', '2024-01-31 05:49:30'),
(9, 'sameera prasantha', 'sameera.prasantha@gmail.com', NULL, '$2y$12$9ZnWnfdpz/mjIhnDU21in.2GLTXq86.JZDXzE4ecCfSLLyWd4loJ2', 'IupTejtkYWYIVZMMjHjZpJc4Z8IAklTWWBCupYWU78245949', '2024-01-31 08:50:00', '2024-01-31 08:50:00'),
(10, 'sameera prasantha', 'sameera.prasantha123@gmail.com', NULL, '$2y$12$pEYf9kJj2IK9ROmCLsP8u.5uoYRDmXaS.Q2nF5QYm4oJVDe.ASzmG', NULL, '2024-01-31 20:30:02', '2024-01-31 20:30:02'),
(11, 'Ovitigalage Don Sameera Prasantha Ovitigala', 'sameera.071@gmail.com', NULL, '$2y$12$WMmFHH5BIDUvpH9Y1OnJY.6M6eI83T0SqLGhzOyj6izqXgDkcmjPa', NULL, '2024-01-31 20:40:27', '2024-01-31 20:40:27'),
(12, 'prasantha', 'donsam558@gmail.com', NULL, '$2y$12$tfhFB3W7W4US3n9qGppRpu/jJEWEHiX.MMDhqeHBrz.FMPF1R8Sqq', NULL, '2024-02-01 05:03:58', '2024-02-01 05:03:58'),
(13, 'sameera prasantha', 'test123@gmail.com', NULL, '$2y$12$SFJ23zxJRZ4ZyqsycimMqucC5XNC0zn04gwpk1hi9tqflfz8LLTDa', NULL, '2024-02-01 05:08:17', '2024-02-01 05:08:17'),
(14, 'prasantha', 'test02@gmail.com', NULL, '$2y$12$dK0cPs25lhvt6eWe5N.DeecdfQONZMtjYDWw7xd1QoX0QIyJtfdYO', NULL, '2024-02-01 05:10:17', '2024-02-01 05:10:17'),
(15, 'sameera prasantha', 'donsam559@gmail.com', NULL, '$2y$12$VkOHW0KX3zWGc/r85IOvk.tTddZM4dLbipHQqgSp71T/LscM.HLce', NULL, '2024-02-01 05:18:48', '2024-02-01 05:18:48'),
(16, 'sameera prasantha', 'donsam557@gmail.com', NULL, '$2y$12$wJS0N59l9PoUfIWj56YeKOaSwcdbsLe1YkX8M5kdb.Vzd2Oiswoba', NULL, '2024-02-01 05:20:42', '2024-02-01 05:20:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=210;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
