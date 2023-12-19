DROP TABLE "user";
DROP TABLE "dog_profiles";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "dog_profiles" (
	"id" SERIAL PRIMARY KEY,
	"dog_name" VARCHAR (100),
	"dog_sh_descr" VARCHAR (600),
	"dog_lg_descr" VARCHAR (5000),
	"pic_url" VARCHAR (1000),
	"adopted" BOOLEAN DEFAULT FALSE);
	
	
INSERT INTO "dog_profiles"
	(dog_name, dog_sh_descr, dog_lg_descr, pic_url)
	VALUES ('Milo', 'The sweetest of sweet dogs', 'Meet Milo, the epitome of canine greatness and the ultimate ambassador of compassion. With his caramel fur and soulful eyes, Milo is not just a dog; he''s a beacon of unwavering support for foster dogs in need. His heart is as vast as his enthusiasm for life, offering boundless love and comfort to every furry friend that crosses his path. Whether it''s sharing toys, providing reassuring nudges, or simply being a steadfast companion, Milo embodies the essence of kindness, making him not just the best dog but also a treasured hero among the foster dog community.', 'https://scontent.ffar1-2.fna.fbcdn.net/v/t39.30808-6/344990500_545885964400328_3517233801578805562_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Ab0c0EG3YykAX9HqyTG&_nc_ht=scontent.ffar1-2.fna&oh=00_AfCIWacdLbhkvZ8k2pPi0nN0abSWg2RFv2r_Oy6VvKDgtw&oe=65862CE6'),
	('Zuzu', 'She''s a Diva!', '
Zuzu, the enigmatic shepherd mix, is a study in contrasts, adorned with a stunning coat that mirrors her complex personality. Moody and opinionated, she''s not one to shy away from expressing her desires, often punctuating her discontent with piercing glares when things don''t quite align with her expectations. Yet beneath this facade of intensity lies a heart of gold. When the stars align and her desires are met, Zuzu''s sweetness radiates, revealing a tender soul that craves affection and companionship, proving that behind her discerning gaze, she''s a sweetheart longing for understanding and connection.', 'https://scontent.ffar1-2.fna.fbcdn.net/v/t39.30808-6/326350141_551719556981354_8960441493966667593_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=fApprWyXhqgAX_vq0Ua&_nc_ht=scontent.ffar1-2.fna&oh=00_AfBTkoFmvKNt4VWhfU0Hgdk-B4pIp7Sjh9Gh2GjYZ8uR_g&oe=658652F3');
