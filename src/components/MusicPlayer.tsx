import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const tracks = [
    {
      title: "Piano Melody",
      artist: "Piano Performance",
      // This would normally be a real audio file path
      src: "https://example.com/audio/piano-melody.mp3",
      cover: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Guitar Solo",
      artist: "Guitar Performance",
      src: "https://example.com/audio/guitar-solo.mp3",
      cover: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Bass Groove",
      artist: "Bass Performance",
      src: "https://example.com/audio/bass-groove.mp3",
      cover: "https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  useEffect(() => {
    // Show the music player after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio play error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && progressBarRef.current) {
      const progressBar = progressBarRef.current;
      const rect = progressBar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      audioRef.current.currentTime = percentage * duration;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const changeSong = (direction: 'next' | 'prev') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentTrack + 1) % tracks.length;
    } else {
      newIndex = (currentTrack - 1 + tracks.length) % tracks.length;
    }
    
    setCurrentTrack(newIndex);
    setCurrentTime(0);
    
    // After changing the track, play it if it was already playing
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play error:", e));
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Album Art */}
          <div className="hidden sm:block w-12 h-12 rounded-md overflow-hidden">
            <img 
              src={tracks[currentTrack].cover} 
              alt={tracks[currentTrack].title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Track Info */}
          <div className="w-1/4 hidden sm:block">
            <p className="text-white font-medium truncate">{tracks[currentTrack].title}</p>
            <p className="text-gray-400 text-sm truncate">{tracks[currentTrack].artist}</p>
          </div>
          
          {/* Audio Controls */}
          <div className="flex-1">
            <div className="flex items-center justify-center gap-4 mb-2">
              <button 
                className="text-gray-300 hover:text-white transition-colors" 
                onClick={() => changeSong('prev')}
              >
                <SkipBack size={20} />
              </button>
              <button 
                className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>
              <button 
                className="text-gray-300 hover:text-white transition-colors" 
                onClick={() => changeSong('next')}
              >
                <SkipForward size={20} />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 w-8 text-right">{formatTime(currentTime)}</span>
              <div 
                ref={progressBarRef}
                className="flex-1 h-1 bg-gray-700 rounded-full cursor-pointer relative"
                onClick={handleProgressClick}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-400 w-8">{formatTime(duration)}</span>
            </div>
          </div>
          
          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-2">
            <button 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 appearance-none bg-gray-700 rounded-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #9333ea ${volume * 100}%, #374151 ${volume * 100}%)`
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => changeSong('next')}
      />
    </div>
  );
};