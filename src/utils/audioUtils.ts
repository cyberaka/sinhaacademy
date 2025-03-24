export const handlePlayAudio = (audioUrl: string, name: string) => {
  const audio = new Audio(audioUrl);
  audio.play();
};

export const handlePlayAllAudio = (map1: any[], map2: any[]) => {
  map1.forEach((item: any, index: number) => {
    setTimeout(() => {
      handlePlayAudio(item.audioUrl, item.name);
    }, index * 1000); // 1 second gap between each map1 item
  });

  setTimeout(() => {
    map2.forEach((item: any, index: number) => {
      setTimeout(() => {
        handlePlayAudio(item.audioUrl, item.name);
      }, index * 1000); // 1 second gap between each map2 item
    });
  }, ((map1.length * 1000) + 1000)); // Start map2 after map1 finishes
};
