

CREATE TABLE `location` (
  `ncin` varchar(8) NOT NULL,
  `ncinprop` char(8) NOT NULL,
  `matricule` varchar(50) NOT NULL,
  `prix` int(11) NOT NULL,
  `duree` int(11) NOT NULL,
  `date` date NOT NULL
) 

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `access` char(1) NOT NULL,
  `ncin` varchar(8) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `daten` varchar(10) NOT NULL,
  `npermis` varchar(20) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `num_tel` varchar(8) NOT NULL,
  `image` varchar(200) NOT NULL,
  `imagencin` varchar(50) NOT NULL,
  `bgimage` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `joindate` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) 


CREATE TABLE `voiture` (
  `id` int(11) NOT NULL,
  `matricule` varchar(50) NOT NULL,
  `ncinprop` char(8) NOT NULL,
  `marque` varchar(50) NOT NULL,
  `couleur` varchar(50) NOT NULL,
  `prix` int(11) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `etat` char(1) NOT NULL,
  `image` varchar(100) NOT NULL
) 


ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `voiture`
--
ALTER TABLE `voiture`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `voiture`
--
ALTER TABLE `voiture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

