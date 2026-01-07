import { spawn } from 'child_process'

export const NotificationPlugin = async (opts) => {
  return {
    event: ({ event }) => {
      if (event.type === "session.idle") {
        spawn('./ffplay.exe', ['../../finish.wav', '-v', 'quiet', '-autoexit', '-nodisp'], {
          cwd: '/mnt/d/Develop/ffmpeg/bin',
          stdio: 'ignore',
          detached: true,
          windowsHide: true
        }).unref()
      }
    }
  }
}

