const Tasks = [
  {
    name: "GoでのAPI認証",
    deadline: "2020/4/10",
    progress: 20,
    color: success
  },
  {
    name: "Vue.jsでログイン画面の実装",
    deadline: "2020/3/10",
    progress: 90,
    color: success
  },
  {
    name: "GoでのAPI認証",
    deadline: "2020/4/10",
    progress: 20,
    color: success
  },
  {
    name: "GoでのAPI認証",
    deadline: "2020/4/10",
    progress: 20,
    color: success
  },
  {
    name: "GoでのAPI認証",
    deadline: "2020/4/10",
    progress: 20,
    color: success
  }
];

const getTask = limit => {
  return limit ? Tasks.slice(0, limit) : Tasks;
};

export { Tasks, getTask };
