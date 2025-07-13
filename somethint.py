import pygame, sys
from pygame.locals import QUIT
import random

print("Game is run!")
space_img = pygame.image.load('space.jpg')
pygame.init()
DISPLAYSURF = pygame.display.set_mode((920, 800))
pygame.display.set_caption('Hello World!')

player_img = pygame.image.load('player.png')
player = player_img.get_rect(center=(460, 400))

coin_img = pygame.image.load('coin.png')
coins_coord = []

score = 0

for _ in range(1):
    cx = random.randint(0, 820)
    cy = random.randint(0, 700)
    coin = coin_img.get_rect(center=(cx, cy))
    coins_coord.append(coin)

# Флаги для перемещения
move_left = False
move_right = False
move_up = False
move_down = False

while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_a:
                move_left = True
            elif event.key == pygame.K_d:
                move_right = True
            elif event.key == pygame.K_w:
                move_up = True
            elif event.key == pygame.K_s:
                move_down = True
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_a:
                move_left = False
            elif event.key == pygame.K_d:
                move_right = False
            elif event.key == pygame.K_w:
                move_up = False
            elif event.key == pygame.K_s:
                move_down = False
        if player.x < 0:
            player.x = 0
            move_left = False
        if player.x > 920:
            player.x = 900
            move_right = False
        if player.y < 0:
            player.y = 0
            move_up = False
        if player.y > 800:
            player.y = 780
            move_down = False

    # Обновление позиции игрока
    if move_left:
        player.x -= 5
    if move_right:
        player.x += 5
    if move_up:
        player.y += 5
    if move_down:
        player.y -= 5

    DISPLAYSURF.blit(space_img, (0, 0))
    DISPLAYSURF.blit(player_img, player)

    for coord in coins_coord:
        DISPLAYSURF.blit(coin_img, coord)
        if player.colliderect(coord):
            coins_coord.remove(coord)
            score += 1
            if score == 1:
                print("You win!")
                pygame.quit()

    pygame.display.update()