-- Create sample user
INSERT INTO users (id, username, password_hash, role)
VALUES (1, 'demo_user', 'hashedpassword', 'user');

-- Sample route history
INSERT INTO routes (user_id, origin, destination, eta)
VALUES (1, 'New York, NY', 'Boston, MA', '04:32');

-- Sample traffic simulation
INSERT INTO trafficsimulations (segment_id, delay_weight)
VALUES (101, 1.8);
