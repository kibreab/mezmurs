class Seed
attr_reader :seed
def initialize
  @seed
end

def run
  generate_data
end

def generate_data
  10.times do |k|
    song = Song.new
    song.title = "Song seeded #{k}"
    song.description = "Classical of Nebse Hoy"
    song.filename = "Nebse Hoy - Track 1.mp3"
    type = "Song"
    category = "Misgana"
    song.save!
    puts "Generated item  # #{song.id}"
  end
end
end

seed = Seed.new
seed.run