while (true) {
    if (input.rotation(Rotation.Pitch) > 0 || input.rotation(Rotation.Pitch) < 0 || input.rotation(Rotation.Roll) > 0 || input.rotation(Rotation.Roll) < 0) {
        music.setVolume(255)
        music.siren.playUntilDone()
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
