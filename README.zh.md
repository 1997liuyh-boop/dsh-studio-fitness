# dsh-studio-fitness

[English](README.md)

## 仓库信息

- 仓库名称：`dsh-studio-fitness`
- 仓库描述：本地健身记录工作室，管理训练计划、时长、组数、次数、重量和训练容量。
- 仓库地址：`https://github.com/1997liuyh-boop/dsh-studio-fitness`

## 功能与特性

- 创建和编辑带日期的训练记录，填写项目、组数、次数、重量、时长和备注。
- 按训练项目或日期筛选历史，查看训练次数、总时长和训练容量。
- 在当前 DSH 会话中查询总结或规划下一次训练，数据只保存在本工作室。
- 导入、导出和清理本地 JSON 数据，便于备份和迁移。
- 使用隔离的工作室数据目录，不安装外部健身服务。

## 安装

请先安装控制组合包，再完整退出 Desktop，通过官方插件管理器安装本工作室精确 tag：

```powershell
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-library#v0.1.3"
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-fitness#v0.2.1"
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop list
```

验证安装包包含 `main: lib/index.js`、`exports./client: lib/client.js`、`dsh.bundle.patch: ./cordis.patch.yml` 和已构建的 `static` 入口。重新启动 Desktop 后打开“健身记录工作室”。

## 要求与限制

源码构建需要 Node.js 22 和 npm。记录保存在本地，不同步可穿戴设备。工作室不提供医疗建议，也不替用户评估训练风险。清理 DSH 数据前请导出 JSON。上游和许可信息见 `UPSTREAM.json`。

## 许可与来源

本项目使用 MIT 许可。上游致谢和固定源码版本记录在 `UPSTREAM.json`。
