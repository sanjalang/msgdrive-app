# MsgDrive 示範用的程式碼檔(虛構資料)
from dataclasses import dataclass


@dataclass
class Note:
    id: int
    title: str


def greet(notes: list[Note]) -> str:
    """回傳一句問候語"""
    return f"目前有 {len(notes)} 則筆記"


if __name__ == "__main__":
    print(greet([Note(1, "示範"), Note(2, "測試")]))
