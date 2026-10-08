# media-hub

MediaHub A lightweight HTTP media server for local content streaming. Tech Stack - **Language:** Python 3 - **Stack:** Simple HTTP server (no framework) Usage python3 server.py [port] Default: http://localhost:8899

## 用途与 Target 判定

开发者工具（已归档）；一般不做穿戴双 Target

- 移动端：不适用
- 智能硬件：不适用

## 目标平台

不按消费级「手机+智能硬件」双 Target 强求。

## 技术栈信号

- 检测到：extension, node

## 命令

```bash
# 浏览器加载已解压扩展（选本目录）
```

## 状态

已归档。默认只做必要修复与知识库同步，不新开大范围需求。

## 助手约束

- Loop：先定可验证 Done 与停止条件；每切片过验证环；失败回灌；详见 docs/LOOP_ENGINEERING.md
- Harness：遵循根 AGENTS「Harness Engineering」；Guide=本文件，Sensor=测试/CI；同类失误二次须沉淀规则或测试（棘轮）。详见 docs/HARNESS_ENGINEERING.md
- 遵循仓库根 `/Users/skat/AGENTS.md` 与本文件的用途判定
- 可选 Target 可搁置；不适用形态不要硬加
- 改动聚焦；公共逻辑抽离复用
