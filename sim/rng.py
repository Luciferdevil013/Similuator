"""Seeded, independently-spawned random streams.

Each named consumer gets its own generator derived from one master seed via
`SeedSequence.spawn`. That independence is what lets you disable the LiDAR, or
add a fault injector, without perturbing the IMU noise sequence -- so a
baseline run and a resilient run stay comparable, as the test matrix requires.
"""
from __future__ import annotations

import numpy as np


class RngHub:
    def __init__(self, seed: int):
        self.seed = int(seed)
        self._root = np.random.SeedSequence(self.seed)
        self._streams: dict[str, np.random.Generator] = {}

    def stream(self, name: str) -> np.random.Generator:
        """Return the generator for `name`, creating it deterministically.

        The child seed is derived from a stable hash of the name, so a stream's
        sequence depends only on (master seed, name) -- never on the order in
        which streams happen to be requested.
        """
        if name not in self._streams:
            tag = int.from_bytes(name.encode("utf-8"), "little") % (2 ** 63)
            child = np.random.SeedSequence(entropy=self.seed, spawn_key=(tag,))
            self._streams[name] = np.random.default_rng(child)
        return self._streams[name]

    def names(self) -> list[str]:
        return sorted(self._streams)
