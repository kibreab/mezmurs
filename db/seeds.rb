class Seed
attr_reader :seed
def initialize
  @seed
end

def run
  generate_data
end

def generate_data
  10.times do
    song = Song.new
    song.title = "Song1"
    song.description = "Classical of Nebse Hoy"
    song.filename = "Nebse Hoy - Track 1.mp3"
    song.singer = "some guy"
    type = "Song"
    category = "Misgana"
    song.save!
    puts "Generated item  # #{song.id}"
  end
end
end

seed = Seed.new
seed.run