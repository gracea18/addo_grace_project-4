while True:
    if input.rotation(Rotation.PITCH) > 0 or input.rotation(Rotation.PITCH) < 0 or input.rotation(Rotation.ROLL) > 0 or input.rotation(Rotation.ROLL) < 0:
        music.set_volume(255)
        music.siren.play_until_done()
        light.set_all(light.rgb(255,255,255))