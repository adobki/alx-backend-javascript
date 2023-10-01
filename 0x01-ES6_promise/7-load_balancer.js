// Returns output from promise that gets resolved first

export default async function loadBalancer(chinaDownload, USDownload) {
  const completedJobs = [];

  USDownload.then((data) => completedJobs.push(data));
  chinaDownload.then((data) => completedJobs.push(data));

  await USDownload.then();
  await chinaDownload.then();

  return completedJobs[0];
}
