import Poll from '../models/poll';
import PollManager from '../structures/PollManager';
import Task from '../structures/Task';

class PollTask extends Task {
  constructor() {
    super('poll', {
      // Every 10 seconds
      interval: 10_000,
    });
  }

  public async exec(): Promise<void> {
    const polls = await Poll.find({
      finish: { $lte: Date.now(), $ne: -1 },
    });

    for (const poll of polls)
      await PollManager.end(this.client, poll._id);
  }
}

export default PollTask;