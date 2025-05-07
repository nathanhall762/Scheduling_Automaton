from pyrekordbox import Library

library = Library('/path/to/master.db')

# View all tracks
for track in library.tracks:
    print(track.title, track.artist)

# Access track metadata
track = library.tracks[0]
print(track.title)
print(track.cues)  # list of Cue objects
print(track.key)
print(track.rating)
