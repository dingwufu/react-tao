export default async function (path: string, opt?: Object) {
  const url = 'https://www.easy-mock.com/mock/5c33ffed55d45d5684fb42eb/movie' + path;
  const options = Object.assign({
    method: 'GET',
  }, opt);
  try {
    const response = await fetch(url, options);
    const { data, status } = await response.json();

    if (status === 0) {
      return data;
    } else {
      // 错误处理
    }
  } catch (error) {
    // 错误处理
  }
}
