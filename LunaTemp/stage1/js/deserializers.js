var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.JointSpring' )
  var i2257 = data
  i2256.spring = i2257[0]
  i2256.damper = i2257[1]
  i2256.targetPosition = i2257[2]
  return i2256
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.JointMotor' )
  var i2259 = data
  i2258.m_TargetVelocity = i2259[0]
  i2258.m_Force = i2259[1]
  i2258.m_FreeSpin = i2259[2]
  return i2258
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.JointLimits' )
  var i2261 = data
  i2260.m_Min = i2261[0]
  i2260.m_Max = i2261[1]
  i2260.m_Bounciness = i2261[2]
  i2260.m_BounceMinVelocity = i2261[3]
  i2260.m_ContactDistance = i2261[4]
  i2260.minBounce = i2261[5]
  i2260.maxBounce = i2261[6]
  return i2260
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.JointDrive' )
  var i2263 = data
  i2262.m_PositionSpring = i2263[0]
  i2262.m_PositionDamper = i2263[1]
  i2262.m_MaximumForce = i2263[2]
  i2262.m_UseAcceleration = i2263[3]
  return i2262
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2265 = data
  i2264.m_Spring = i2265[0]
  i2264.m_Damper = i2265[1]
  return i2264
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2267 = data
  i2266.m_Limit = i2267[0]
  i2266.m_Bounciness = i2267[1]
  i2266.m_ContactDistance = i2267[2]
  return i2266
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2269 = data
  i2268.m_ExtremumSlip = i2269[0]
  i2268.m_ExtremumValue = i2269[1]
  i2268.m_AsymptoteSlip = i2269[2]
  i2268.m_AsymptoteValue = i2269[3]
  i2268.m_Stiffness = i2269[4]
  return i2268
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2271 = data
  i2270.m_LowerAngle = i2271[0]
  i2270.m_UpperAngle = i2271[1]
  return i2270
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2273 = data
  i2272.m_MotorSpeed = i2273[0]
  i2272.m_MaximumMotorTorque = i2273[1]
  return i2272
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2275 = data
  i2274.m_DampingRatio = i2275[0]
  i2274.m_Frequency = i2275[1]
  i2274.m_Angle = i2275[2]
  return i2274
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2277 = data
  i2276.m_LowerTranslation = i2277[0]
  i2276.m_UpperTranslation = i2277[1]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2279 = data
  i2278.name = i2279[0]
  i2278.halfPrecision = !!i2279[1]
  i2278.useSimplification = !!i2279[2]
  i2278.useUInt32IndexFormat = !!i2279[3]
  i2278.vertexCount = i2279[4]
  i2278.aabb = i2279[5]
  var i2281 = i2279[6]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( !!i2281[i + 0] );
  }
  i2278.streams = i2280
  i2278.vertices = i2279[7]
  var i2283 = i2279[8]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2283[i + 0]) );
  }
  i2278.subMeshes = i2282
  var i2285 = i2279[9]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 16) {
    i2284.push( new pc.Mat4().setData(i2285[i + 0], i2285[i + 1], i2285[i + 2], i2285[i + 3],  i2285[i + 4], i2285[i + 5], i2285[i + 6], i2285[i + 7],  i2285[i + 8], i2285[i + 9], i2285[i + 10], i2285[i + 11],  i2285[i + 12], i2285[i + 13], i2285[i + 14], i2285[i + 15]) );
  }
  i2278.bindposes = i2284
  var i2287 = i2279[10]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2287[i + 0]) );
  }
  i2278.blendShapes = i2286
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2293 = data
  i2292.triangles = i2293[0]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2299 = data
  i2298.name = i2299[0]
  var i2301 = i2299[1]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2301[i + 0]) );
  }
  i2298.frames = i2300
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2302 = root || new pc.UnityMaterial()
  var i2303 = data
  i2302.name = i2303[0]
  request.r(i2303[1], i2303[2], 0, i2302, 'shader')
  i2302.renderQueue = i2303[3]
  i2302.enableInstancing = !!i2303[4]
  var i2305 = i2303[5]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2305[i + 0]) );
  }
  i2302.floatParameters = i2304
  var i2307 = i2303[6]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2307[i + 0]) );
  }
  i2302.colorParameters = i2306
  var i2309 = i2303[7]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2309[i + 0]) );
  }
  i2302.vectorParameters = i2308
  var i2311 = i2303[8]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2311[i + 0]) );
  }
  i2302.textureParameters = i2310
  var i2313 = i2303[9]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2313[i + 0]) );
  }
  i2302.materialFlags = i2312
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2317 = data
  i2316.name = i2317[0]
  i2316.value = i2317[1]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2321 = data
  i2320.name = i2321[0]
  i2320.value = new pc.Color(i2321[1], i2321[2], i2321[3], i2321[4])
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2325 = data
  i2324.name = i2325[0]
  i2324.value = new pc.Vec4( i2325[1], i2325[2], i2325[3], i2325[4] )
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2329 = data
  i2328.name = i2329[0]
  request.r(i2329[1], i2329[2], 0, i2328, 'value')
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2333 = data
  i2332.name = i2333[0]
  i2332.enabled = !!i2333[1]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2335 = data
  i2334.name = i2335[0]
  i2334.width = i2335[1]
  i2334.height = i2335[2]
  i2334.mipmapCount = i2335[3]
  i2334.anisoLevel = i2335[4]
  i2334.filterMode = i2335[5]
  i2334.hdr = !!i2335[6]
  i2334.format = i2335[7]
  i2334.wrapMode = i2335[8]
  i2334.alphaIsTransparency = !!i2335[9]
  i2334.alphaSource = i2335[10]
  i2334.graphicsFormat = i2335[11]
  i2334.sRGBTexture = !!i2335[12]
  i2334.desiredColorSpace = i2335[13]
  i2334.wrapU = i2335[14]
  i2334.wrapV = i2335[15]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2337 = data
  i2336.position = new pc.Vec3( i2337[0], i2337[1], i2337[2] )
  i2336.scale = new pc.Vec3( i2337[3], i2337[4], i2337[5] )
  i2336.rotation = new pc.Quat(i2337[6], i2337[7], i2337[8], i2337[9])
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'sharedMesh')
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'additionalVertexStreams')
  i2340.enabled = !!i2341[2]
  request.r(i2341[3], i2341[4], 0, i2340, 'sharedMaterial')
  var i2343 = i2341[5]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 2, i2342, '')
  }
  i2340.sharedMaterials = i2342
  i2340.receiveShadows = !!i2341[6]
  i2340.shadowCastingMode = i2341[7]
  i2340.sortingLayerID = i2341[8]
  i2340.sortingOrder = i2341[9]
  i2340.lightmapIndex = i2341[10]
  i2340.lightmapSceneIndex = i2341[11]
  i2340.lightmapScaleOffset = new pc.Vec4( i2341[12], i2341[13], i2341[14], i2341[15] )
  i2340.lightProbeUsage = i2341[16]
  i2340.reflectionProbeUsage = i2341[17]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'sharedMesh')
  i2346.convex = !!i2347[2]
  i2346.enabled = !!i2347[3]
  i2346.isTrigger = !!i2347[4]
  request.r(i2347[5], i2347[6], 0, i2346, 'material')
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2349 = data
  i2348.name = i2349[0]
  i2348.tagId = i2349[1]
  i2348.enabled = !!i2349[2]
  i2348.isStatic = !!i2349[3]
  i2348.layer = i2349[4]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2351 = data
  i2350.center = new pc.Vec3( i2351[0], i2351[1], i2351[2] )
  i2350.radius = i2351[3]
  i2350.enabled = !!i2351[4]
  i2350.isTrigger = !!i2351[5]
  request.r(i2351[6], i2351[7], 0, i2350, 'material')
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2353 = data
  i2352.mass = i2353[0]
  i2352.drag = i2353[1]
  i2352.angularDrag = i2353[2]
  i2352.useGravity = !!i2353[3]
  i2352.isKinematic = !!i2353[4]
  i2352.constraints = i2353[5]
  i2352.maxAngularVelocity = i2353[6]
  i2352.collisionDetectionMode = i2353[7]
  i2352.interpolation = i2353[8]
  return i2352
}

Deserializers["BallBehavior"] = function (request, data, root) {
  var i2354 = root || request.c( 'BallBehavior' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'ballEffect')
  i2354.ballSpeed = i2355[2]
  request.r(i2355[3], i2355[4], 0, i2354, 'dunkTriggerBottom')
  request.r(i2355[5], i2355[6], 0, i2354, 'dunkTriggerTop')
  request.r(i2355[7], i2355[8], 0, i2354, 'basketRingTrigger')
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2357 = data
  i2356.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2357[0], i2356.main)
  i2356.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2357[1], i2356.colorBySpeed)
  i2356.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2357[2], i2356.colorOverLifetime)
  i2356.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2357[3], i2356.emission)
  i2356.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2357[4], i2356.rotationBySpeed)
  i2356.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2357[5], i2356.rotationOverLifetime)
  i2356.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2357[6], i2356.shape)
  i2356.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2357[7], i2356.sizeBySpeed)
  i2356.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2357[8], i2356.sizeOverLifetime)
  i2356.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2357[9], i2356.textureSheetAnimation)
  i2356.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2357[10], i2356.velocityOverLifetime)
  i2356.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2357[11], i2356.noise)
  i2356.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2357[12], i2356.inheritVelocity)
  i2356.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2357[13], i2356.forceOverLifetime)
  i2356.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2357[14], i2356.limitVelocityOverLifetime)
  i2356.useAutoRandomSeed = !!i2357[15]
  i2356.randomSeed = i2357[16]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2358 = root || new pc.ParticleSystemMain()
  var i2359 = data
  i2358.duration = i2359[0]
  i2358.loop = !!i2359[1]
  i2358.prewarm = !!i2359[2]
  i2358.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[3], i2358.startDelay)
  i2358.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[4], i2358.startLifetime)
  i2358.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[5], i2358.startSpeed)
  i2358.startSize3D = !!i2359[6]
  i2358.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[7], i2358.startSizeX)
  i2358.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[8], i2358.startSizeY)
  i2358.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[9], i2358.startSizeZ)
  i2358.startRotation3D = !!i2359[10]
  i2358.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[11], i2358.startRotationX)
  i2358.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[12], i2358.startRotationY)
  i2358.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[13], i2358.startRotationZ)
  i2358.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2359[14], i2358.startColor)
  i2358.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[15], i2358.gravityModifier)
  i2358.simulationSpace = i2359[16]
  request.r(i2359[17], i2359[18], 0, i2358, 'customSimulationSpace')
  i2358.simulationSpeed = i2359[19]
  i2358.useUnscaledTime = !!i2359[20]
  i2358.scalingMode = i2359[21]
  i2358.playOnAwake = !!i2359[22]
  i2358.maxParticles = i2359[23]
  i2358.emitterVelocityMode = i2359[24]
  i2358.stopAction = i2359[25]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2360 = root || new pc.MinMaxCurve()
  var i2361 = data
  i2360.mode = i2361[0]
  i2360.curveMin = new pc.AnimationCurve( { keys_flow: i2361[1] } )
  i2360.curveMax = new pc.AnimationCurve( { keys_flow: i2361[2] } )
  i2360.curveMultiplier = i2361[3]
  i2360.constantMin = i2361[4]
  i2360.constantMax = i2361[5]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2362 = root || new pc.MinMaxGradient()
  var i2363 = data
  i2362.mode = i2363[0]
  i2362.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2363[1], i2362.gradientMin)
  i2362.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2363[2], i2362.gradientMax)
  i2362.colorMin = new pc.Color(i2363[3], i2363[4], i2363[5], i2363[6])
  i2362.colorMax = new pc.Color(i2363[7], i2363[8], i2363[9], i2363[10])
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2365 = data
  i2364.mode = i2365[0]
  var i2367 = i2365[1]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2367[i + 0]) );
  }
  i2364.colorKeys = i2366
  var i2369 = i2365[2]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2369[i + 0]) );
  }
  i2364.alphaKeys = i2368
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2370 = root || new pc.ParticleSystemColorBySpeed()
  var i2371 = data
  i2370.enabled = !!i2371[0]
  i2370.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2371[1], i2370.color)
  i2370.range = new pc.Vec2( i2371[2], i2371[3] )
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2375 = data
  i2374.color = new pc.Color(i2375[0], i2375[1], i2375[2], i2375[3])
  i2374.time = i2375[4]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2379 = data
  i2378.alpha = i2379[0]
  i2378.time = i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2380 = root || new pc.ParticleSystemColorOverLifetime()
  var i2381 = data
  i2380.enabled = !!i2381[0]
  i2380.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2381[1], i2380.color)
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2382 = root || new pc.ParticleSystemEmitter()
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[1], i2382.rateOverTime)
  i2382.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[2], i2382.rateOverDistance)
  var i2385 = i2383[3]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2385[i + 0]) );
  }
  i2382.bursts = i2384
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2388 = root || new pc.ParticleSystemBurst()
  var i2389 = data
  i2388.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[0], i2388.count)
  i2388.cycleCount = i2389[1]
  i2388.minCount = i2389[2]
  i2388.maxCount = i2389[3]
  i2388.repeatInterval = i2389[4]
  i2388.time = i2389[5]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2390 = root || new pc.ParticleSystemRotationBySpeed()
  var i2391 = data
  i2390.enabled = !!i2391[0]
  i2390.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[1], i2390.x)
  i2390.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[2], i2390.y)
  i2390.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[3], i2390.z)
  i2390.separateAxes = !!i2391[4]
  i2390.range = new pc.Vec2( i2391[5], i2391[6] )
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[1], i2392.x)
  i2392.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[2], i2392.y)
  i2392.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[3], i2392.z)
  i2392.separateAxes = !!i2393[4]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemShape()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.shapeType = i2395[1]
  i2394.randomDirectionAmount = i2395[2]
  i2394.sphericalDirectionAmount = i2395[3]
  i2394.randomPositionAmount = i2395[4]
  i2394.alignToDirection = !!i2395[5]
  i2394.radius = i2395[6]
  i2394.radiusMode = i2395[7]
  i2394.radiusSpread = i2395[8]
  i2394.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[9], i2394.radiusSpeed)
  i2394.radiusThickness = i2395[10]
  i2394.angle = i2395[11]
  i2394.length = i2395[12]
  i2394.boxThickness = new pc.Vec3( i2395[13], i2395[14], i2395[15] )
  i2394.meshShapeType = i2395[16]
  request.r(i2395[17], i2395[18], 0, i2394, 'mesh')
  request.r(i2395[19], i2395[20], 0, i2394, 'meshRenderer')
  request.r(i2395[21], i2395[22], 0, i2394, 'skinnedMeshRenderer')
  i2394.useMeshMaterialIndex = !!i2395[23]
  i2394.meshMaterialIndex = i2395[24]
  i2394.useMeshColors = !!i2395[25]
  i2394.normalOffset = i2395[26]
  i2394.arc = i2395[27]
  i2394.arcMode = i2395[28]
  i2394.arcSpread = i2395[29]
  i2394.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[30], i2394.arcSpeed)
  i2394.donutRadius = i2395[31]
  i2394.position = new pc.Vec3( i2395[32], i2395[33], i2395[34] )
  i2394.rotation = new pc.Vec3( i2395[35], i2395[36], i2395[37] )
  i2394.scale = new pc.Vec3( i2395[38], i2395[39], i2395[40] )
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemSizeBySpeed()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[1], i2396.x)
  i2396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[2], i2396.y)
  i2396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[3], i2396.z)
  i2396.separateAxes = !!i2397[4]
  i2396.range = new pc.Vec2( i2397[5], i2397[6] )
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[1], i2398.x)
  i2398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[2], i2398.y)
  i2398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[3], i2398.z)
  i2398.separateAxes = !!i2399[4]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2401 = data
  i2400.enabled = !!i2401[0]
  i2400.mode = i2401[1]
  i2400.animation = i2401[2]
  i2400.numTilesX = i2401[3]
  i2400.numTilesY = i2401[4]
  i2400.useRandomRow = !!i2401[5]
  i2400.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[6], i2400.frameOverTime)
  i2400.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[7], i2400.startFrame)
  i2400.cycleCount = i2401[8]
  i2400.rowIndex = i2401[9]
  i2400.flipU = i2401[10]
  i2400.flipV = i2401[11]
  i2400.spriteCount = i2401[12]
  var i2403 = i2401[13]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 2, i2402, '')
  }
  i2400.sprites = i2402
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2406 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[1], i2406.x)
  i2406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[2], i2406.y)
  i2406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[3], i2406.z)
  i2406.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[4], i2406.radial)
  i2406.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[5], i2406.speedModifier)
  i2406.space = i2407[6]
  i2406.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[7], i2406.orbitalX)
  i2406.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[8], i2406.orbitalY)
  i2406.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[9], i2406.orbitalZ)
  i2406.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[10], i2406.orbitalOffsetX)
  i2406.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[11], i2406.orbitalOffsetY)
  i2406.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[12], i2406.orbitalOffsetZ)
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2408 = root || new pc.ParticleSystemNoise()
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.separateAxes = !!i2409[1]
  i2408.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[2], i2408.strengthX)
  i2408.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[3], i2408.strengthY)
  i2408.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[4], i2408.strengthZ)
  i2408.frequency = i2409[5]
  i2408.damping = !!i2409[6]
  i2408.octaveCount = i2409[7]
  i2408.octaveMultiplier = i2409[8]
  i2408.octaveScale = i2409[9]
  i2408.quality = i2409[10]
  i2408.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[11], i2408.scrollSpeed)
  i2408.scrollSpeedMultiplier = i2409[12]
  i2408.remapEnabled = !!i2409[13]
  i2408.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[14], i2408.remapX)
  i2408.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[15], i2408.remapY)
  i2408.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[16], i2408.remapZ)
  i2408.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[17], i2408.positionAmount)
  i2408.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[18], i2408.rotationAmount)
  i2408.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[19], i2408.sizeAmount)
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemInheritVelocity()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.mode = i2411[1]
  i2410.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[2], i2410.curve)
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemForceOverLifetime()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[1], i2412.x)
  i2412.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[2], i2412.y)
  i2412.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[3], i2412.z)
  i2412.space = i2413[4]
  i2412.randomized = !!i2413[5]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2414 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2415 = data
  i2414.enabled = !!i2415[0]
  i2414.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[1], i2414.limit)
  i2414.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[2], i2414.limitX)
  i2414.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[3], i2414.limitY)
  i2414.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[4], i2414.limitZ)
  i2414.dampen = i2415[5]
  i2414.separateAxes = !!i2415[6]
  i2414.space = i2415[7]
  i2414.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[8], i2414.drag)
  i2414.multiplyDragByParticleSize = !!i2415[9]
  i2414.multiplyDragByParticleVelocity = !!i2415[10]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'mesh')
  i2416.meshCount = i2417[2]
  i2416.activeVertexStreamsCount = i2417[3]
  i2416.alignment = i2417[4]
  i2416.renderMode = i2417[5]
  i2416.sortMode = i2417[6]
  i2416.lengthScale = i2417[7]
  i2416.velocityScale = i2417[8]
  i2416.cameraVelocityScale = i2417[9]
  i2416.normalDirection = i2417[10]
  i2416.sortingFudge = i2417[11]
  i2416.minParticleSize = i2417[12]
  i2416.maxParticleSize = i2417[13]
  i2416.pivot = new pc.Vec3( i2417[14], i2417[15], i2417[16] )
  request.r(i2417[17], i2417[18], 0, i2416, 'trailMaterial')
  i2416.applyActiveColorSpace = !!i2417[19]
  i2416.enabled = !!i2417[20]
  request.r(i2417[21], i2417[22], 0, i2416, 'sharedMaterial')
  var i2419 = i2417[23]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 2, i2418, '')
  }
  i2416.sharedMaterials = i2418
  i2416.receiveShadows = !!i2417[24]
  i2416.shadowCastingMode = i2417[25]
  i2416.sortingLayerID = i2417[26]
  i2416.sortingOrder = i2417[27]
  i2416.lightmapIndex = i2417[28]
  i2416.lightmapSceneIndex = i2417[29]
  i2416.lightmapScaleOffset = new pc.Vec4( i2417[30], i2417[31], i2417[32], i2417[33] )
  i2416.lightProbeUsage = i2417[34]
  i2416.reflectionProbeUsage = i2417[35]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2421 = data
  i2420.name = i2421[0]
  i2420.atlasId = i2421[1]
  i2420.mipmapCount = i2421[2]
  i2420.hdr = !!i2421[3]
  i2420.size = i2421[4]
  i2420.anisoLevel = i2421[5]
  i2420.filterMode = i2421[6]
  var i2423 = i2421[7]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 4) {
    i2422.push( UnityEngine.Rect.MinMaxRect(i2423[i + 0], i2423[i + 1], i2423[i + 2], i2423[i + 3]) );
  }
  i2420.rects = i2422
  i2420.wrapU = i2421[8]
  i2420.wrapV = i2421[9]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2427 = data
  i2426.name = i2427[0]
  i2426.index = i2427[1]
  i2426.startup = !!i2427[2]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2429 = data
  i2428.aspect = i2429[0]
  i2428.orthographic = !!i2429[1]
  i2428.orthographicSize = i2429[2]
  i2428.backgroundColor = new pc.Color(i2429[3], i2429[4], i2429[5], i2429[6])
  i2428.nearClipPlane = i2429[7]
  i2428.farClipPlane = i2429[8]
  i2428.fieldOfView = i2429[9]
  i2428.depth = i2429[10]
  i2428.clearFlags = i2429[11]
  i2428.cullingMask = i2429[12]
  i2428.rect = i2429[13]
  request.r(i2429[14], i2429[15], 0, i2428, 'targetTexture')
  i2428.usePhysicalProperties = !!i2429[16]
  i2428.focalLength = i2429[17]
  i2428.sensorSize = new pc.Vec2( i2429[18], i2429[19] )
  i2428.lensShift = new pc.Vec2( i2429[20], i2429[21] )
  i2428.gateFit = i2429[22]
  i2428.commandBufferCount = i2429[23]
  i2428.cameraType = i2429[24]
  i2428.enabled = !!i2429[25]
  return i2428
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2431 = data
  i2430.m_RenderShadows = !!i2431[0]
  i2430.m_RequiresDepthTextureOption = i2431[1]
  i2430.m_RequiresOpaqueTextureOption = i2431[2]
  i2430.m_CameraType = i2431[3]
  var i2433 = i2431[4]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2433.length; i += 2) {
  request.r(i2433[i + 0], i2433[i + 1], 1, i2432, '')
  }
  i2430.m_Cameras = i2432
  i2430.m_RendererIndex = i2431[5]
  i2430.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2431[6] )
  request.r(i2431[7], i2431[8], 0, i2430, 'm_VolumeTrigger')
  i2430.m_VolumeFrameworkUpdateModeOption = i2431[9]
  i2430.m_RenderPostProcessing = !!i2431[10]
  i2430.m_Antialiasing = i2431[11]
  i2430.m_AntialiasingQuality = i2431[12]
  i2430.m_StopNaN = !!i2431[13]
  i2430.m_Dithering = !!i2431[14]
  i2430.m_ClearDepth = !!i2431[15]
  i2430.m_AllowXRRendering = !!i2431[16]
  i2430.m_AllowHDROutput = !!i2431[17]
  i2430.m_UseScreenCoordOverride = !!i2431[18]
  i2430.m_ScreenSizeOverride = new pc.Vec4( i2431[19], i2431[20], i2431[21], i2431[22] )
  i2430.m_ScreenCoordScaleBias = new pc.Vec4( i2431[23], i2431[24], i2431[25], i2431[26] )
  i2430.m_RequiresDepthTexture = !!i2431[27]
  i2430.m_RequiresColorTexture = !!i2431[28]
  i2430.m_Version = i2431[29]
  i2430.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2431[30], i2430.m_TaaSettings)
  return i2430
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2437 = data
  i2436.m_Quality = i2437[0]
  i2436.m_FrameInfluence = i2437[1]
  i2436.m_JitterScale = i2437[2]
  i2436.m_MipBias = i2437[3]
  i2436.m_VarianceClampScale = i2437[4]
  i2436.m_ContrastAdaptiveSharpening = i2437[5]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2439 = data
  i2438.type = i2439[0]
  i2438.color = new pc.Color(i2439[1], i2439[2], i2439[3], i2439[4])
  i2438.cullingMask = i2439[5]
  i2438.intensity = i2439[6]
  i2438.range = i2439[7]
  i2438.spotAngle = i2439[8]
  i2438.shadows = i2439[9]
  i2438.shadowNormalBias = i2439[10]
  i2438.shadowBias = i2439[11]
  i2438.shadowStrength = i2439[12]
  i2438.shadowResolution = i2439[13]
  i2438.lightmapBakeType = i2439[14]
  i2438.renderMode = i2439[15]
  request.r(i2439[16], i2439[17], 0, i2438, 'cookie')
  i2438.cookieSize = i2439[18]
  i2438.shadowNearPlane = i2439[19]
  i2438.enabled = !!i2439[20]
  return i2438
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2441 = data
  i2440.m_Version = i2441[0]
  i2440.m_UsePipelineSettings = !!i2441[1]
  i2440.m_AdditionalLightsShadowResolutionTier = i2441[2]
  i2440.m_LightLayerMask = i2441[3]
  i2440.m_RenderingLayers = i2441[4]
  i2440.m_CustomShadowLayers = !!i2441[5]
  i2440.m_ShadowLayerMask = i2441[6]
  i2440.m_ShadowRenderingLayers = i2441[7]
  i2440.m_LightCookieSize = new pc.Vec2( i2441[8], i2441[9] )
  i2440.m_LightCookieOffset = new pc.Vec2( i2441[10], i2441[11] )
  i2440.m_SoftShadowQuality = i2441[12]
  return i2440
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2443 = data
  i2442.priority = i2443[0]
  i2442.blendDistance = i2443[1]
  i2442.weight = i2443[2]
  request.r(i2443[3], i2443[4], 0, i2442, 'sharedProfile')
  i2442.m_IsGlobal = !!i2443[5]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'clip')
  request.r(i2445[2], i2445[3], 0, i2444, 'outputAudioMixerGroup')
  i2444.playOnAwake = !!i2445[4]
  i2444.loop = !!i2445[5]
  i2444.time = i2445[6]
  i2444.volume = i2445[7]
  i2444.pitch = i2445[8]
  i2444.enabled = !!i2445[9]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i2447 = data
  i2446.useMotor = !!i2447[0]
  i2446.useLimits = !!i2447[1]
  i2446.useSpring = !!i2447[2]
  i2446.limits = request.d('UnityEngine.JointLimits', i2447[3], i2446.limits)
  i2446.motor = request.d('UnityEngine.JointMotor', i2447[4], i2446.motor)
  i2446.spring = request.d('UnityEngine.JointSpring', i2447[5], i2446.spring)
  request.r(i2447[6], i2447[7], 0, i2446, 'connectedBody')
  i2446.axis = new pc.Vec3( i2447[8], i2447[9], i2447[10] )
  i2446.anchor = new pc.Vec3( i2447[11], i2447[12], i2447[13] )
  i2446.connectedAnchor = new pc.Vec3( i2447[14], i2447[15], i2447[16] )
  i2446.autoConfigureConnectedAnchor = !!i2447[17]
  i2446.massScale = i2447[18]
  i2446.connectedMassScale = i2447[19]
  i2446.enableCollision = !!i2447[20]
  i2446.breakForce = i2447[21]
  i2446.breakTorque = i2447[22]
  return i2446
}

Deserializers["BasketBehavior"] = function (request, data, root) {
  var i2448 = root || request.c( 'BasketBehavior' )
  var i2449 = data
  i2448.basketMoveDistance = i2449[0]
  i2448.basketMoveSpeed = i2449[1]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2451 = data
  i2450.center = new pc.Vec3( i2451[0], i2451[1], i2451[2] )
  i2450.radius = i2451[3]
  i2450.height = i2451[4]
  i2450.direction = i2451[5]
  i2450.enabled = !!i2451[6]
  i2450.isTrigger = !!i2451[7]
  request.r(i2451[8], i2451[9], 0, i2450, 'material')
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'sharedMesh')
  var i2455 = i2453[2]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 2, i2454, '')
  }
  i2452.bones = i2454
  i2452.updateWhenOffscreen = !!i2453[3]
  i2452.localBounds = i2453[4]
  request.r(i2453[5], i2453[6], 0, i2452, 'rootBone')
  var i2457 = i2453[7]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2457[i + 0]) );
  }
  i2452.blendShapesWeights = i2456
  i2452.enabled = !!i2453[8]
  request.r(i2453[9], i2453[10], 0, i2452, 'sharedMaterial')
  var i2459 = i2453[11]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 2, i2458, '')
  }
  i2452.sharedMaterials = i2458
  i2452.receiveShadows = !!i2453[12]
  i2452.shadowCastingMode = i2453[13]
  i2452.sortingLayerID = i2453[14]
  i2452.sortingOrder = i2453[15]
  i2452.lightmapIndex = i2453[16]
  i2452.lightmapSceneIndex = i2453[17]
  i2452.lightmapScaleOffset = new pc.Vec4( i2453[18], i2453[19], i2453[20], i2453[21] )
  i2452.lightProbeUsage = i2453[22]
  i2452.reflectionProbeUsage = i2453[23]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2465 = data
  i2464.weight = i2465[0]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2467 = data
  i2466.center = new pc.Vec3( i2467[0], i2467[1], i2467[2] )
  i2466.size = new pc.Vec3( i2467[3], i2467[4], i2467[5] )
  i2466.enabled = !!i2467[6]
  i2466.isTrigger = !!i2467[7]
  request.r(i2467[8], i2467[9], 0, i2466, 'material')
  return i2466
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2468 = root || request.c( 'InputManager' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'mainCamera')
  i2468.ballLayer = UnityEngine.LayerMask.FromIntegerValue( i2469[2] )
  i2468.ballSelectionLayer = UnityEngine.LayerMask.FromIntegerValue( i2469[3] )
  request.r(i2469[4], i2469[5], 0, i2468, 'ballSelectionParent')
  request.r(i2469[6], i2469[7], 0, i2468, 'ballSelectionRing')
  i2468.minHoldTime = i2469[8]
  i2468.maxFlickTime = i2469[9]
  i2468.minHoldDistance = i2469[10]
  i2468.minFlickDistance = i2469[11]
  i2468.throwForce = i2469[12]
  i2468.maxThrowHeight = i2469[13]
  i2468.maxThrowDepth = i2469[14]
  i2468.maxThrowHorizontal = i2469[15]
  i2468.minThrowHorizontal = i2469[16]
  i2468.minThrowSpeed = i2469[17]
  i2468.maxThrowSpeed = i2469[18]
  i2468.throwSensitivity = i2469[19]
  i2468.fixedZPosition = i2469[20]
  i2468.selectionDragSpeed = i2469[21]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2471 = data
  i2470.pivot = new pc.Vec2( i2471[0], i2471[1] )
  i2470.anchorMin = new pc.Vec2( i2471[2], i2471[3] )
  i2470.anchorMax = new pc.Vec2( i2471[4], i2471[5] )
  i2470.sizeDelta = new pc.Vec2( i2471[6], i2471[7] )
  i2470.anchoredPosition3D = new pc.Vec3( i2471[8], i2471[9], i2471[10] )
  i2470.rotation = new pc.Quat(i2471[11], i2471[12], i2471[13], i2471[14])
  i2470.scale = new pc.Vec3( i2471[15], i2471[16], i2471[17] )
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2473 = data
  i2472.planeDistance = i2473[0]
  i2472.referencePixelsPerUnit = i2473[1]
  i2472.isFallbackOverlay = !!i2473[2]
  i2472.renderMode = i2473[3]
  i2472.renderOrder = i2473[4]
  i2472.sortingLayerName = i2473[5]
  i2472.sortingOrder = i2473[6]
  i2472.scaleFactor = i2473[7]
  request.r(i2473[8], i2473[9], 0, i2472, 'worldCamera')
  i2472.overrideSorting = !!i2473[10]
  i2472.pixelPerfect = !!i2473[11]
  i2472.targetDisplay = i2473[12]
  i2472.overridePixelPerfect = !!i2473[13]
  i2472.enabled = !!i2473[14]
  return i2472
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2475 = data
  i2474.m_UiScaleMode = i2475[0]
  i2474.m_ReferencePixelsPerUnit = i2475[1]
  i2474.m_ScaleFactor = i2475[2]
  i2474.m_ReferenceResolution = new pc.Vec2( i2475[3], i2475[4] )
  i2474.m_ScreenMatchMode = i2475[5]
  i2474.m_MatchWidthOrHeight = i2475[6]
  i2474.m_PhysicalUnit = i2475[7]
  i2474.m_FallbackScreenDPI = i2475[8]
  i2474.m_DefaultSpriteDPI = i2475[9]
  i2474.m_DynamicPixelsPerUnit = i2475[10]
  i2474.m_PresetInfoIsWorld = !!i2475[11]
  return i2474
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2477 = data
  i2476.m_IgnoreReversedGraphics = !!i2477[0]
  i2476.m_BlockingObjects = i2477[1]
  i2476.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2477[2] )
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2479 = data
  i2478.cullTransparentMesh = !!i2479[0]
  return i2478
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.UI.Image' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'm_Sprite')
  i2480.m_Type = i2481[2]
  i2480.m_PreserveAspect = !!i2481[3]
  i2480.m_FillCenter = !!i2481[4]
  i2480.m_FillMethod = i2481[5]
  i2480.m_FillAmount = i2481[6]
  i2480.m_FillClockwise = !!i2481[7]
  i2480.m_FillOrigin = i2481[8]
  i2480.m_UseSpriteMesh = !!i2481[9]
  i2480.m_PixelsPerUnitMultiplier = i2481[10]
  request.r(i2481[11], i2481[12], 0, i2480, 'm_Material')
  i2480.m_Maskable = !!i2481[13]
  i2480.m_Color = new pc.Color(i2481[14], i2481[15], i2481[16], i2481[17])
  i2480.m_RaycastTarget = !!i2481[18]
  i2480.m_RaycastPadding = new pc.Vec4( i2481[19], i2481[20], i2481[21], i2481[22] )
  return i2480
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2482 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2483 = data
  i2482.m_hasFontAssetChanged = !!i2483[0]
  request.r(i2483[1], i2483[2], 0, i2482, 'm_baseMaterial')
  i2482.m_maskOffset = new pc.Vec4( i2483[3], i2483[4], i2483[5], i2483[6] )
  i2482.m_text = i2483[7]
  i2482.m_isRightToLeft = !!i2483[8]
  request.r(i2483[9], i2483[10], 0, i2482, 'm_fontAsset')
  request.r(i2483[11], i2483[12], 0, i2482, 'm_sharedMaterial')
  var i2485 = i2483[13]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 2) {
  request.r(i2485[i + 0], i2485[i + 1], 2, i2484, '')
  }
  i2482.m_fontSharedMaterials = i2484
  request.r(i2483[14], i2483[15], 0, i2482, 'm_fontMaterial')
  var i2487 = i2483[16]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 2, i2486, '')
  }
  i2482.m_fontMaterials = i2486
  i2482.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2483[17], i2483[18], i2483[19], i2483[20])
  i2482.m_fontColor = new pc.Color(i2483[21], i2483[22], i2483[23], i2483[24])
  i2482.m_enableVertexGradient = !!i2483[25]
  i2482.m_colorMode = i2483[26]
  i2482.m_fontColorGradient = request.d('TMPro.VertexGradient', i2483[27], i2482.m_fontColorGradient)
  request.r(i2483[28], i2483[29], 0, i2482, 'm_fontColorGradientPreset')
  request.r(i2483[30], i2483[31], 0, i2482, 'm_spriteAsset')
  i2482.m_tintAllSprites = !!i2483[32]
  request.r(i2483[33], i2483[34], 0, i2482, 'm_StyleSheet')
  i2482.m_TextStyleHashCode = i2483[35]
  i2482.m_overrideHtmlColors = !!i2483[36]
  i2482.m_faceColor = UnityEngine.Color32.ConstructColor(i2483[37], i2483[38], i2483[39], i2483[40])
  i2482.m_fontSize = i2483[41]
  i2482.m_fontSizeBase = i2483[42]
  i2482.m_fontWeight = i2483[43]
  i2482.m_enableAutoSizing = !!i2483[44]
  i2482.m_fontSizeMin = i2483[45]
  i2482.m_fontSizeMax = i2483[46]
  i2482.m_fontStyle = i2483[47]
  i2482.m_HorizontalAlignment = i2483[48]
  i2482.m_VerticalAlignment = i2483[49]
  i2482.m_textAlignment = i2483[50]
  i2482.m_characterSpacing = i2483[51]
  i2482.m_wordSpacing = i2483[52]
  i2482.m_lineSpacing = i2483[53]
  i2482.m_lineSpacingMax = i2483[54]
  i2482.m_paragraphSpacing = i2483[55]
  i2482.m_charWidthMaxAdj = i2483[56]
  i2482.m_TextWrappingMode = i2483[57]
  i2482.m_wordWrappingRatios = i2483[58]
  i2482.m_overflowMode = i2483[59]
  request.r(i2483[60], i2483[61], 0, i2482, 'm_linkedTextComponent')
  request.r(i2483[62], i2483[63], 0, i2482, 'parentLinkedComponent')
  i2482.m_enableKerning = !!i2483[64]
  var i2489 = i2483[65]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.add(i2489[i + 0]);
  }
  i2482.m_ActiveFontFeatures = i2488
  i2482.m_enableExtraPadding = !!i2483[66]
  i2482.checkPaddingRequired = !!i2483[67]
  i2482.m_isRichText = !!i2483[68]
  i2482.m_parseCtrlCharacters = !!i2483[69]
  i2482.m_isOrthographic = !!i2483[70]
  i2482.m_isCullingEnabled = !!i2483[71]
  i2482.m_horizontalMapping = i2483[72]
  i2482.m_verticalMapping = i2483[73]
  i2482.m_uvLineOffset = i2483[74]
  i2482.m_geometrySortingOrder = i2483[75]
  i2482.m_IsTextObjectScaleStatic = !!i2483[76]
  i2482.m_VertexBufferAutoSizeReduction = !!i2483[77]
  i2482.m_useMaxVisibleDescender = !!i2483[78]
  i2482.m_pageToDisplay = i2483[79]
  i2482.m_margin = new pc.Vec4( i2483[80], i2483[81], i2483[82], i2483[83] )
  i2482.m_isUsingLegacyAnimationComponent = !!i2483[84]
  i2482.m_isVolumetricText = !!i2483[85]
  request.r(i2483[86], i2483[87], 0, i2482, 'm_Material')
  i2482.m_EmojiFallbackSupport = !!i2483[88]
  i2482.m_Maskable = !!i2483[89]
  i2482.m_Color = new pc.Color(i2483[90], i2483[91], i2483[92], i2483[93])
  i2482.m_RaycastTarget = !!i2483[94]
  i2482.m_RaycastPadding = new pc.Vec4( i2483[95], i2483[96], i2483[97], i2483[98] )
  return i2482
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.VertexGradient' )
  var i2491 = data
  i2490.topLeft = new pc.Color(i2491[0], i2491[1], i2491[2], i2491[3])
  i2490.topRight = new pc.Color(i2491[4], i2491[5], i2491[6], i2491[7])
  i2490.bottomLeft = new pc.Color(i2491[8], i2491[9], i2491[10], i2491[11])
  i2490.bottomRight = new pc.Color(i2491[12], i2491[13], i2491[14], i2491[15])
  return i2490
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2495 = data
  i2494.m_Spacing = i2495[0]
  i2494.m_ChildForceExpandWidth = !!i2495[1]
  i2494.m_ChildForceExpandHeight = !!i2495[2]
  i2494.m_ChildControlWidth = !!i2495[3]
  i2494.m_ChildControlHeight = !!i2495[4]
  i2494.m_ChildScaleWidth = !!i2495[5]
  i2494.m_ChildScaleHeight = !!i2495[6]
  i2494.m_ReverseArrangement = !!i2495[7]
  i2494.m_Padding = UnityEngine.RectOffset.FromPaddings(i2495[8], i2495[9], i2495[10], i2495[11])
  i2494.m_ChildAlignment = i2495[12]
  return i2494
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.UI.Button' )
  var i2497 = data
  i2496.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2497[0], i2496.m_OnClick)
  i2496.m_Navigation = request.d('UnityEngine.UI.Navigation', i2497[1], i2496.m_Navigation)
  i2496.m_Transition = i2497[2]
  i2496.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2497[3], i2496.m_Colors)
  i2496.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2497[4], i2496.m_SpriteState)
  i2496.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2497[5], i2496.m_AnimationTriggers)
  i2496.m_Interactable = !!i2497[6]
  request.r(i2497[7], i2497[8], 0, i2496, 'm_TargetGraphic')
  return i2496
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2499 = data
  i2498.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2499[0], i2498.m_PersistentCalls)
  return i2498
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2501 = data
  var i2503 = i2501[0]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.add(request.d('UnityEngine.Events.PersistentCall', i2503[i + 0]));
  }
  i2500.m_Calls = i2502
  return i2500
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'm_Target')
  i2506.m_TargetAssemblyTypeName = i2507[2]
  i2506.m_MethodName = i2507[3]
  i2506.m_Mode = i2507[4]
  i2506.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2507[5], i2506.m_Arguments)
  i2506.m_CallState = i2507[6]
  return i2506
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'm_ObjectArgument')
  i2508.m_ObjectArgumentAssemblyTypeName = i2509[2]
  i2508.m_IntArgument = i2509[3]
  i2508.m_FloatArgument = i2509[4]
  i2508.m_StringArgument = i2509[5]
  i2508.m_BoolArgument = !!i2509[6]
  return i2508
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2511 = data
  i2510.m_Mode = i2511[0]
  i2510.m_WrapAround = !!i2511[1]
  request.r(i2511[2], i2511[3], 0, i2510, 'm_SelectOnUp')
  request.r(i2511[4], i2511[5], 0, i2510, 'm_SelectOnDown')
  request.r(i2511[6], i2511[7], 0, i2510, 'm_SelectOnLeft')
  request.r(i2511[8], i2511[9], 0, i2510, 'm_SelectOnRight')
  return i2510
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2513 = data
  i2512.m_NormalColor = new pc.Color(i2513[0], i2513[1], i2513[2], i2513[3])
  i2512.m_HighlightedColor = new pc.Color(i2513[4], i2513[5], i2513[6], i2513[7])
  i2512.m_PressedColor = new pc.Color(i2513[8], i2513[9], i2513[10], i2513[11])
  i2512.m_SelectedColor = new pc.Color(i2513[12], i2513[13], i2513[14], i2513[15])
  i2512.m_DisabledColor = new pc.Color(i2513[16], i2513[17], i2513[18], i2513[19])
  i2512.m_ColorMultiplier = i2513[20]
  i2512.m_FadeDuration = i2513[21]
  return i2512
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'm_HighlightedSprite')
  request.r(i2515[2], i2515[3], 0, i2514, 'm_PressedSprite')
  request.r(i2515[4], i2515[5], 0, i2514, 'm_SelectedSprite')
  request.r(i2515[6], i2515[7], 0, i2514, 'm_DisabledSprite')
  return i2514
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2517 = data
  i2516.m_NormalTrigger = i2517[0]
  i2516.m_HighlightedTrigger = i2517[1]
  i2516.m_PressedTrigger = i2517[2]
  i2516.m_SelectedTrigger = i2517[3]
  i2516.m_DisabledTrigger = i2517[4]
  return i2516
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2518 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2519 = data
  i2518.m_Spacing = i2519[0]
  i2518.m_ChildForceExpandWidth = !!i2519[1]
  i2518.m_ChildForceExpandHeight = !!i2519[2]
  i2518.m_ChildControlWidth = !!i2519[3]
  i2518.m_ChildControlHeight = !!i2519[4]
  i2518.m_ChildScaleWidth = !!i2519[5]
  i2518.m_ChildScaleHeight = !!i2519[6]
  i2518.m_ReverseArrangement = !!i2519[7]
  i2518.m_Padding = UnityEngine.RectOffset.FromPaddings(i2519[8], i2519[9], i2519[10], i2519[11])
  i2518.m_ChildAlignment = i2519[12]
  return i2518
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'm_FirstSelected')
  i2520.m_sendNavigationEvents = !!i2521[2]
  i2520.m_DragThreshold = i2521[3]
  return i2520
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2522 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2523 = data
  i2522.m_HorizontalAxis = i2523[0]
  i2522.m_VerticalAxis = i2523[1]
  i2522.m_SubmitButton = i2523[2]
  i2522.m_CancelButton = i2523[3]
  i2522.m_InputActionsPerSecond = i2523[4]
  i2522.m_RepeatDelay = i2523[5]
  i2522.m_ForceModuleActive = !!i2523[6]
  i2522.m_SendPointerHoverToParent = !!i2523[7]
  return i2522
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2524 = root || request.c( 'GameManager' )
  var i2525 = data
  i2524.scoreBase = i2525[0]
  i2524.scoreDunk = i2525[1]
  i2524.timeLimit = i2525[2]
  i2524.timeBonus = i2525[3]
  i2524.targetFPS = i2525[4]
  i2524.minStreakStart = i2525[5]
  request.r(i2525[6], i2525[7], 0, i2524, 'basket')
  var i2527 = i2525[8]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( i2527[i + 0] );
  }
  i2524.quotesScoring = i2526
  var i2529 = i2525[9]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( i2529[i + 0] );
  }
  i2524.quotesBonuses = i2528
  request.r(i2525[10], i2525[11], 0, i2524, 'inputManager')
  var i2531 = i2525[12]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 2) {
  request.r(i2531[i + 0], i2531[i + 1], 2, i2530, '')
  }
  i2524.ballMaterials = i2530
  var i2533 = i2525[13]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 2) {
  request.r(i2533[i + 0], i2533[i + 1], 2, i2532, '')
  }
  i2524.ballInScene = i2532
  var i2535 = i2525[14]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 2, i2534, '')
  }
  i2524.basketAudio = i2534
  var i2537 = i2525[15]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2524.netAudio = i2536
  request.r(i2525[16], i2525[17], 0, i2524, 'perfectAudio')
  request.r(i2525[18], i2525[19], 0, i2524, 'globalVolume')
  request.r(i2525[20], i2525[21], 0, i2524, 'perfectEffect')
  request.r(i2525[22], i2525[23], 0, i2524, 'basketEffect')
  request.r(i2525[24], i2525[25], 0, i2524, 'currentScoreText')
  request.r(i2525[26], i2525[27], 0, i2524, 'highScoreText')
  request.r(i2525[28], i2525[29], 0, i2524, 'timeText')
  request.r(i2525[30], i2525[31], 0, i2524, 'quoteText')
  request.r(i2525[32], i2525[33], 0, i2524, 'playingOverlay')
  request.r(i2525[34], i2525[35], 0, i2524, 'selectingBallOverlay')
  request.r(i2525[36], i2525[37], 0, i2524, 'selectBallButton')
  request.r(i2525[38], i2525[39], 0, i2524, 'moveBasketButton')
  request.r(i2525[40], i2525[41], 0, i2524, 'restartButton')
  request.r(i2525[42], i2525[43], 0, i2524, 'confirmBallButton')
  request.r(i2525[44], i2525[45], 0, i2524, 'backToGameButton')
  request.r(i2525[46], i2525[47], 0, i2524, 'randomBallButton')
  request.r(i2525[48], i2525[49], 0, i2524, 'mainCamera')
  request.r(i2525[50], i2525[51], 0, i2524, 'selectionCamera')
  request.r(i2525[52], i2525[53], 0, i2524, 'selectionCameraGameObject')
  request.r(i2525[54], i2525[55], 0, i2524, 'uncheckedSprite')
  request.r(i2525[56], i2525[57], 0, i2524, 'checkedSprite')
  request.r(i2525[58], i2525[59], 0, i2524, 'rotateRing1')
  return i2524
}

Deserializers["LunaGameManager"] = function (request, data, root) {
  var i2544 = root || request.c( 'LunaGameManager' )
  var i2545 = data
  i2544.enableLunaAnalytics = !!i2545[0]
  i2544.maxParticles = i2545[1]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2547 = data
  i2546.ambientIntensity = i2547[0]
  i2546.reflectionIntensity = i2547[1]
  i2546.ambientMode = i2547[2]
  i2546.ambientLight = new pc.Color(i2547[3], i2547[4], i2547[5], i2547[6])
  i2546.ambientSkyColor = new pc.Color(i2547[7], i2547[8], i2547[9], i2547[10])
  i2546.ambientGroundColor = new pc.Color(i2547[11], i2547[12], i2547[13], i2547[14])
  i2546.ambientEquatorColor = new pc.Color(i2547[15], i2547[16], i2547[17], i2547[18])
  i2546.fogColor = new pc.Color(i2547[19], i2547[20], i2547[21], i2547[22])
  i2546.fogEndDistance = i2547[23]
  i2546.fogStartDistance = i2547[24]
  i2546.fogDensity = i2547[25]
  i2546.fog = !!i2547[26]
  request.r(i2547[27], i2547[28], 0, i2546, 'skybox')
  i2546.fogMode = i2547[29]
  var i2549 = i2547[30]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2549[i + 0]) );
  }
  i2546.lightmaps = i2548
  i2546.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2547[31], i2546.lightProbes)
  i2546.lightmapsMode = i2547[32]
  i2546.mixedBakeMode = i2547[33]
  i2546.environmentLightingMode = i2547[34]
  i2546.ambientProbe = new pc.SphericalHarmonicsL2(i2547[35])
  i2546.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2547[36])
  i2546.useReferenceAmbientProbe = !!i2547[37]
  request.r(i2547[38], i2547[39], 0, i2546, 'customReflection')
  request.r(i2547[40], i2547[41], 0, i2546, 'defaultReflection')
  i2546.defaultReflectionMode = i2547[42]
  i2546.defaultReflectionResolution = i2547[43]
  i2546.sunLightObjectId = i2547[44]
  i2546.pixelLightCount = i2547[45]
  i2546.defaultReflectionHDR = !!i2547[46]
  i2546.hasLightDataAsset = !!i2547[47]
  i2546.hasManualGenerate = !!i2547[48]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'lightmapColor')
  request.r(i2553[2], i2553[3], 0, i2552, 'lightmapDirection')
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2554 = root || new UnityEngine.LightProbes()
  var i2555 = data
  return i2554
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2563 = data
  request.r(i2563[0], i2563[1], 0, i2562, 'panelPrefab')
  var i2565 = i2563[2]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2565[i + 0]));
  }
  i2562.prefabs = i2564
  return i2562
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2568 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2569 = data
  i2568.type = i2569[0]
  request.r(i2569[1], i2569[2], 0, i2568, 'prefab')
  return i2568
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2571 = data
  i2570.m_HorizontalFit = i2571[0]
  i2570.m_VerticalFit = i2571[1]
  return i2570
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2573 = data
  request.r(i2573[0], i2573[1], 0, i2572, 'contentHolder')
  return i2572
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2575 = data
  request.r(i2575[0], i2575[1], 0, i2574, 'nameLabel')
  request.r(i2575[2], i2575[3], 0, i2574, 'scrollRect')
  request.r(i2575[4], i2575[5], 0, i2574, 'viewport')
  request.r(i2575[6], i2575[7], 0, i2574, 'Canvas')
  return i2574
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2577 = data
  i2576.m_IgnoreLayout = !!i2577[0]
  i2576.m_MinWidth = i2577[1]
  i2576.m_MinHeight = i2577[2]
  i2576.m_PreferredWidth = i2577[3]
  i2576.m_PreferredHeight = i2577[4]
  i2576.m_FlexibleWidth = i2577[5]
  i2576.m_FlexibleHeight = i2577[6]
  i2576.m_LayoutPriority = i2577[7]
  return i2576
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.UI.Text' )
  var i2579 = data
  i2578.m_FontData = request.d('UnityEngine.UI.FontData', i2579[0], i2578.m_FontData)
  i2578.m_Text = i2579[1]
  request.r(i2579[2], i2579[3], 0, i2578, 'm_Material')
  i2578.m_Maskable = !!i2579[4]
  i2578.m_Color = new pc.Color(i2579[5], i2579[6], i2579[7], i2579[8])
  i2578.m_RaycastTarget = !!i2579[9]
  i2578.m_RaycastPadding = new pc.Vec4( i2579[10], i2579[11], i2579[12], i2579[13] )
  return i2578
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2581 = data
  request.r(i2581[0], i2581[1], 0, i2580, 'm_Font')
  i2580.m_FontSize = i2581[2]
  i2580.m_FontStyle = i2581[3]
  i2580.m_BestFit = !!i2581[4]
  i2580.m_MinSize = i2581[5]
  i2580.m_MaxSize = i2581[6]
  i2580.m_Alignment = i2581[7]
  i2580.m_AlignByGeometry = !!i2581[8]
  i2580.m_RichText = !!i2581[9]
  i2580.m_HorizontalOverflow = i2581[10]
  i2580.m_VerticalOverflow = i2581[11]
  i2580.m_LineSpacing = i2581[12]
  return i2580
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2583 = data
  request.r(i2583[0], i2583[1], 0, i2582, 'm_Content')
  i2582.m_Horizontal = !!i2583[2]
  i2582.m_Vertical = !!i2583[3]
  i2582.m_MovementType = i2583[4]
  i2582.m_Elasticity = i2583[5]
  i2582.m_Inertia = !!i2583[6]
  i2582.m_DecelerationRate = i2583[7]
  i2582.m_ScrollSensitivity = i2583[8]
  request.r(i2583[9], i2583[10], 0, i2582, 'm_Viewport')
  request.r(i2583[11], i2583[12], 0, i2582, 'm_HorizontalScrollbar')
  request.r(i2583[13], i2583[14], 0, i2582, 'm_VerticalScrollbar')
  i2582.m_HorizontalScrollbarVisibility = i2583[15]
  i2582.m_VerticalScrollbarVisibility = i2583[16]
  i2582.m_HorizontalScrollbarSpacing = i2583[17]
  i2582.m_VerticalScrollbarSpacing = i2583[18]
  i2582.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2583[19], i2582.m_OnValueChanged)
  return i2582
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2585 = data
  i2584.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2585[0], i2584.m_PersistentCalls)
  return i2584
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2587 = data
  i2586.m_ShowMaskGraphic = !!i2587[0]
  return i2586
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2589 = data
  request.r(i2589[0], i2589[1], 0, i2588, 'm_HandleRect')
  i2588.m_Direction = i2589[2]
  i2588.m_Value = i2589[3]
  i2588.m_Size = i2589[4]
  i2588.m_NumberOfSteps = i2589[5]
  i2588.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2589[6], i2588.m_OnValueChanged)
  i2588.m_Navigation = request.d('UnityEngine.UI.Navigation', i2589[7], i2588.m_Navigation)
  i2588.m_Transition = i2589[8]
  i2588.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2589[9], i2588.m_Colors)
  i2588.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2589[10], i2588.m_SpriteState)
  i2588.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2589[11], i2588.m_AnimationTriggers)
  i2588.m_Interactable = !!i2589[12]
  request.r(i2589[13], i2589[14], 0, i2588, 'm_TargetGraphic')
  return i2588
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2591 = data
  i2590.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2591[0], i2590.m_PersistentCalls)
  return i2590
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2593 = data
  var i2595 = i2593[0]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2595[i + 0]));
  }
  i2592.m_Delegates = i2594
  return i2592
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2599 = data
  i2598.eventID = i2599[0]
  i2598.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2599[1], i2598.callback)
  return i2598
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2601 = data
  i2600.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2601[0], i2600.m_PersistentCalls)
  return i2600
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2602 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2603 = data
  request.r(i2603[0], i2603[1], 0, i2602, 'nameLabel')
  request.r(i2603[2], i2603[3], 0, i2602, 'valueLabel')
  i2602.colorDefault = new pc.Color(i2603[4], i2603[5], i2603[6], i2603[7])
  i2602.colorSelected = new pc.Color(i2603[8], i2603[9], i2603[10], i2603[11])
  return i2602
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2605 = data
  request.r(i2605[0], i2605[1], 0, i2604, 'nameLabel')
  request.r(i2605[2], i2605[3], 0, i2604, 'valueToggle')
  request.r(i2605[4], i2605[5], 0, i2604, 'checkmarkImage')
  i2604.colorDefault = new pc.Color(i2605[6], i2605[7], i2605[8], i2605[9])
  i2604.colorSelected = new pc.Color(i2605[10], i2605[11], i2605[12], i2605[13])
  return i2604
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2607 = data
  i2606.toggleTransition = i2607[0]
  request.r(i2607[1], i2607[2], 0, i2606, 'graphic')
  i2606.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2607[3], i2606.onValueChanged)
  request.r(i2607[4], i2607[5], 0, i2606, 'm_Group')
  i2606.m_IsOn = !!i2607[6]
  i2606.m_Navigation = request.d('UnityEngine.UI.Navigation', i2607[7], i2606.m_Navigation)
  i2606.m_Transition = i2607[8]
  i2606.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2607[9], i2606.m_Colors)
  i2606.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2607[10], i2606.m_SpriteState)
  i2606.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2607[11], i2606.m_AnimationTriggers)
  i2606.m_Interactable = !!i2607[12]
  request.r(i2607[13], i2607[14], 0, i2606, 'm_TargetGraphic')
  return i2606
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2609 = data
  i2608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2609[0], i2608.m_PersistentCalls)
  return i2608
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'nameLabel')
  request.r(i2611[2], i2611[3], 0, i2610, 'valueLabel')
  i2610.colorDefault = new pc.Color(i2611[4], i2611[5], i2611[6], i2611[7])
  i2610.colorSelected = new pc.Color(i2611[8], i2611[9], i2611[10], i2611[11])
  return i2610
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'nameLabel')
  request.r(i2613[2], i2613[3], 0, i2612, 'valueLabel')
  i2612.colorDefault = new pc.Color(i2613[4], i2613[5], i2613[6], i2613[7])
  i2612.colorSelected = new pc.Color(i2613[8], i2613[9], i2613[10], i2613[11])
  return i2612
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2615 = data
  request.r(i2615[0], i2615[1], 0, i2614, 'nameLabel')
  request.r(i2615[2], i2615[3], 0, i2614, 'valueLabel')
  i2614.colorDefault = new pc.Color(i2615[4], i2615[5], i2615[6], i2615[7])
  i2614.colorSelected = new pc.Color(i2615[8], i2615[9], i2615[10], i2615[11])
  return i2614
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2617 = data
  request.r(i2617[0], i2617[1], 0, i2616, 'nextButtonText')
  request.r(i2617[2], i2617[3], 0, i2616, 'previousButtonText')
  request.r(i2617[4], i2617[5], 0, i2616, 'nameLabel')
  request.r(i2617[6], i2617[7], 0, i2616, 'valueLabel')
  i2616.colorDefault = new pc.Color(i2617[8], i2617[9], i2617[10], i2617[11])
  i2616.colorSelected = new pc.Color(i2617[12], i2617[13], i2617[14], i2617[15])
  return i2616
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2619 = data
  request.r(i2619[0], i2619[1], 0, i2618, 'nameLabel')
  i2618.colorDefault = new pc.Color(i2619[2], i2619[3], i2619[4], i2619[5])
  i2618.colorSelected = new pc.Color(i2619[6], i2619[7], i2619[8], i2619[9])
  return i2618
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2621 = data
  request.r(i2621[0], i2621[1], 0, i2620, 'nameLabel')
  request.r(i2621[2], i2621[3], 0, i2620, 'valueToggle')
  i2620.colorDefault = new pc.Color(i2621[4], i2621[5], i2621[6], i2621[7])
  i2620.colorSelected = new pc.Color(i2621[8], i2621[9], i2621[10], i2621[11])
  return i2620
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2623 = data
  request.r(i2623[0], i2623[1], 0, i2622, 'content')
  request.r(i2623[2], i2623[3], 0, i2622, 'arrowOpened')
  request.r(i2623[4], i2623[5], 0, i2622, 'arrowClosed')
  i2622.toggleTransition = i2623[6]
  request.r(i2623[7], i2623[8], 0, i2622, 'graphic')
  i2622.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2623[9], i2622.onValueChanged)
  request.r(i2623[10], i2623[11], 0, i2622, 'm_Group')
  i2622.m_IsOn = !!i2623[12]
  i2622.m_Navigation = request.d('UnityEngine.UI.Navigation', i2623[13], i2622.m_Navigation)
  i2622.m_Transition = i2623[14]
  i2622.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2623[15], i2622.m_Colors)
  i2622.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2623[16], i2622.m_SpriteState)
  i2622.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2623[17], i2622.m_AnimationTriggers)
  i2622.m_Interactable = !!i2623[18]
  request.r(i2623[19], i2623[20], 0, i2622, 'm_TargetGraphic')
  return i2622
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2625 = data
  request.r(i2625[0], i2625[1], 0, i2624, 'nameLabel')
  request.r(i2625[2], i2625[3], 0, i2624, 'valueToggle')
  request.r(i2625[4], i2625[5], 0, i2624, 'colorImage')
  request.r(i2625[6], i2625[7], 0, i2624, 'fieldR')
  request.r(i2625[8], i2625[9], 0, i2624, 'fieldG')
  request.r(i2625[10], i2625[11], 0, i2624, 'fieldB')
  request.r(i2625[12], i2625[13], 0, i2624, 'fieldA')
  i2624.colorDefault = new pc.Color(i2625[14], i2625[15], i2625[16], i2625[17])
  i2624.colorSelected = new pc.Color(i2625[18], i2625[19], i2625[20], i2625[21])
  return i2624
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2627 = data
  request.r(i2627[0], i2627[1], 0, i2626, 'nameLabel')
  request.r(i2627[2], i2627[3], 0, i2626, 'valueLabel')
  i2626.colorDefault = new pc.Color(i2627[4], i2627[5], i2627[6], i2627[7])
  i2626.colorSelected = new pc.Color(i2627[8], i2627[9], i2627[10], i2627[11])
  return i2626
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2629 = data
  request.r(i2629[0], i2629[1], 0, i2628, 'nameLabel')
  request.r(i2629[2], i2629[3], 0, i2628, 'valueToggle')
  request.r(i2629[4], i2629[5], 0, i2628, 'fieldX')
  request.r(i2629[6], i2629[7], 0, i2628, 'fieldY')
  i2628.colorDefault = new pc.Color(i2629[8], i2629[9], i2629[10], i2629[11])
  i2628.colorSelected = new pc.Color(i2629[12], i2629[13], i2629[14], i2629[15])
  return i2628
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'nameLabel')
  request.r(i2631[2], i2631[3], 0, i2630, 'valueToggle')
  request.r(i2631[4], i2631[5], 0, i2630, 'fieldX')
  request.r(i2631[6], i2631[7], 0, i2630, 'fieldY')
  request.r(i2631[8], i2631[9], 0, i2630, 'fieldZ')
  i2630.colorDefault = new pc.Color(i2631[10], i2631[11], i2631[12], i2631[13])
  i2630.colorSelected = new pc.Color(i2631[14], i2631[15], i2631[16], i2631[17])
  return i2630
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'nameLabel')
  request.r(i2633[2], i2633[3], 0, i2632, 'valueToggle')
  request.r(i2633[4], i2633[5], 0, i2632, 'fieldX')
  request.r(i2633[6], i2633[7], 0, i2632, 'fieldY')
  request.r(i2633[8], i2633[9], 0, i2632, 'fieldZ')
  request.r(i2633[10], i2633[11], 0, i2632, 'fieldW')
  i2632.colorDefault = new pc.Color(i2633[12], i2633[13], i2633[14], i2633[15])
  i2632.colorSelected = new pc.Color(i2633[16], i2633[17], i2633[18], i2633[19])
  return i2632
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2635 = data
  i2634.colorDefault = new pc.Color(i2635[0], i2635[1], i2635[2], i2635[3])
  i2634.colorSelected = new pc.Color(i2635[4], i2635[5], i2635[6], i2635[7])
  return i2634
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2636 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2637 = data
  i2636.colorDefault = new pc.Color(i2637[0], i2637[1], i2637[2], i2637[3])
  i2636.colorSelected = new pc.Color(i2637[4], i2637[5], i2637[6], i2637[7])
  return i2636
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2638 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2639 = data
  request.r(i2639[0], i2639[1], 0, i2638, 'nameLabel')
  request.r(i2639[2], i2639[3], 0, i2638, 'header')
  i2638.colorDefault = new pc.Color(i2639[4], i2639[5], i2639[6], i2639[7])
  i2638.colorSelected = new pc.Color(i2639[8], i2639[9], i2639[10], i2639[11])
  return i2638
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2640 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2641 = data
  request.r(i2641[0], i2641[1], 0, i2640, 'nameLabel')
  request.r(i2641[2], i2641[3], 0, i2640, 'valueToggle')
  var i2643 = i2641[4]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 1, i2642, '')
  }
  i2640.toggles = i2642
  i2640.colorDefault = new pc.Color(i2641[5], i2641[6], i2641[7], i2641[8])
  i2640.colorSelected = new pc.Color(i2641[9], i2641[10], i2641[11], i2641[12])
  return i2640
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2646 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2647 = data
  request.r(i2647[0], i2647[1], 0, i2646, 'nameLabel')
  request.r(i2647[2], i2647[3], 0, i2646, 'valueToggle')
  request.r(i2647[4], i2647[5], 0, i2646, 'checkmarkImage')
  i2646.colorDefault = new pc.Color(i2647[6], i2647[7], i2647[8], i2647[9])
  i2646.colorSelected = new pc.Color(i2647[10], i2647[11], i2647[12], i2647[13])
  return i2646
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2648 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'nameLabel')
  request.r(i2649[2], i2649[3], 0, i2648, 'valueToggle')
  request.r(i2649[4], i2649[5], 0, i2648, 'checkmarkImage')
  i2648.colorDefault = new pc.Color(i2649[6], i2649[7], i2649[8], i2649[9])
  i2648.colorSelected = new pc.Color(i2649[10], i2649[11], i2649[12], i2649[13])
  return i2648
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2650 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2651 = data
  request.r(i2651[0], i2651[1], 0, i2650, 'nextButtonText')
  request.r(i2651[2], i2651[3], 0, i2650, 'previousButtonText')
  request.r(i2651[4], i2651[5], 0, i2650, 'nameLabel')
  request.r(i2651[6], i2651[7], 0, i2650, 'valueLabel')
  i2650.colorDefault = new pc.Color(i2651[8], i2651[9], i2651[10], i2651[11])
  i2650.colorSelected = new pc.Color(i2651[12], i2651[13], i2651[14], i2651[15])
  return i2650
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2652 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2653 = data
  request.r(i2653[0], i2653[1], 0, i2652, 'nameLabel')
  request.r(i2653[2], i2653[3], 0, i2652, 'valueToggle')
  i2652.colorDefault = new pc.Color(i2653[4], i2653[5], i2653[6], i2653[7])
  i2652.colorSelected = new pc.Color(i2653[8], i2653[9], i2653[10], i2653[11])
  return i2652
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2654 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'nameLabel')
  i2654.colorDefault = new pc.Color(i2655[2], i2655[3], i2655[4], i2655[5])
  i2654.colorSelected = new pc.Color(i2655[6], i2655[7], i2655[8], i2655[9])
  return i2654
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2656 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2657 = data
  request.r(i2657[0], i2657[1], 0, i2656, 'nameLabel')
  request.r(i2657[2], i2657[3], 0, i2656, 'valueLabel')
  request.r(i2657[4], i2657[5], 0, i2656, 'progressBarRect')
  i2656.colorDefault = new pc.Color(i2657[6], i2657[7], i2657[8], i2657[9])
  i2656.colorSelected = new pc.Color(i2657[10], i2657[11], i2657[12], i2657[13])
  return i2656
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2659 = data
  request.r(i2659[0], i2659[1], 0, i2658, 'nameLabel')
  request.r(i2659[2], i2659[3], 0, i2658, 'valueLabel')
  i2658.colorDefault = new pc.Color(i2659[4], i2659[5], i2659[6], i2659[7])
  i2658.colorSelected = new pc.Color(i2659[8], i2659[9], i2659[10], i2659[11])
  return i2658
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2661 = data
  request.r(i2661[0], i2661[1], 0, i2660, 'nameLabel')
  request.r(i2661[2], i2661[3], 0, i2660, 'valueLabel')
  i2660.colorDefault = new pc.Color(i2661[4], i2661[5], i2661[6], i2661[7])
  i2660.colorSelected = new pc.Color(i2661[8], i2661[9], i2661[10], i2661[11])
  return i2660
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2662 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, 'nextButtonText')
  request.r(i2663[2], i2663[3], 0, i2662, 'previousButtonText')
  request.r(i2663[4], i2663[5], 0, i2662, 'nameLabel')
  request.r(i2663[6], i2663[7], 0, i2662, 'valueLabel')
  i2662.colorDefault = new pc.Color(i2663[8], i2663[9], i2663[10], i2663[11])
  i2662.colorSelected = new pc.Color(i2663[12], i2663[13], i2663[14], i2663[15])
  return i2662
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2665 = data
  request.r(i2665[0], i2665[1], 0, i2664, 'nextButtonText')
  request.r(i2665[2], i2665[3], 0, i2664, 'previousButtonText')
  request.r(i2665[4], i2665[5], 0, i2664, 'nameLabel')
  request.r(i2665[6], i2665[7], 0, i2664, 'valueLabel')
  i2664.colorDefault = new pc.Color(i2665[8], i2665[9], i2665[10], i2665[11])
  i2664.colorSelected = new pc.Color(i2665[12], i2665[13], i2665[14], i2665[15])
  return i2664
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField' )
  var i2667 = data
  request.r(i2667[0], i2667[1], 0, i2666, 'nameLabel')
  request.r(i2667[2], i2667[3], 0, i2666, 'valueToggle')
  var i2669 = i2667[4]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2669.length; i += 2) {
  request.r(i2669[i + 0], i2669[i + 1], 1, i2668, '')
  }
  i2666.toggles = i2668
  i2666.colorDefault = new pc.Color(i2667[5], i2667[6], i2667[7], i2667[8])
  i2666.colorSelected = new pc.Color(i2667[9], i2667[10], i2667[11], i2667[12])
  return i2666
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'panel')
  request.r(i2671[2], i2671[3], 0, i2670, 'valuePrefab')
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2673 = data
  i2672.AdditionalLightsPerObjectLimit = i2673[0]
  i2672.AdditionalLightsRenderingMode = i2673[1]
  i2672.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2673[2], i2672.LightRenderingMode)
  i2672.ColorGradingLutSize = i2673[3]
  i2672.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2673[4], i2672.ColorGradingMode)
  i2672.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2673[5], i2672.MainLightRenderingMode)
  i2672.MainLightRenderingModeValue = i2673[6]
  i2672.SupportsMainLightShadows = !!i2673[7]
  i2672.MixedLightingSupported = !!i2673[8]
  i2672.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2673[9], i2672.MsaaQuality)
  i2672.MSAA = i2673[10]
  i2672.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2673[11], i2672.OpaqueDownsampling)
  i2672.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2673[12], i2672.MainLightShadowmapResolution)
  i2672.MainLightShadowmapResolutionValue = i2673[13]
  i2672.SupportsSoftShadows = !!i2673[14]
  i2672.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2673[15], i2672.SoftShadowQuality)
  i2672.SoftShadowQualityValue = i2673[16]
  i2672.ShadowDistance = i2673[17]
  i2672.ShadowCascadeCount = i2673[18]
  i2672.Cascade2Split = i2673[19]
  i2672.Cascade3Split = new pc.Vec2( i2673[20], i2673[21] )
  i2672.Cascade4Split = new pc.Vec3( i2673[22], i2673[23], i2673[24] )
  i2672.CascadeBorder = i2673[25]
  i2672.ShadowDepthBias = i2673[26]
  i2672.ShadowNormalBias = i2673[27]
  i2672.RenderScale = i2673[28]
  i2672.RequireDepthTexture = !!i2673[29]
  i2672.RequireOpaqueTexture = !!i2673[30]
  i2672.SupportsHDR = !!i2673[31]
  i2672.SupportsTerrainHoles = !!i2673[32]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2675 = data
  i2674.Disabled = i2675[0]
  i2674.PerVertex = i2675[1]
  i2674.PerPixel = i2675[2]
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2677 = data
  i2676.LowDynamicRange = i2677[0]
  i2676.HighDynamicRange = i2677[1]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2679 = data
  i2678.Disabled = i2679[0]
  i2678._2x = i2679[1]
  i2678._4x = i2679[2]
  i2678._8x = i2679[3]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2681 = data
  i2680.None = i2681[0]
  i2680._2xBilinear = i2681[1]
  i2680._4xBox = i2681[2]
  i2680._4xBilinear = i2681[3]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2683 = data
  i2682._256 = i2683[0]
  i2682._512 = i2683[1]
  i2682._1024 = i2683[2]
  i2682._2048 = i2683[3]
  i2682._4096 = i2683[4]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2685 = data
  i2684.UsePipelineSettings = i2685[0]
  i2684.Low = i2685[1]
  i2684.Medium = i2685[2]
  i2684.High = i2685[3]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2687 = data
  i2686.name = i2687[0]
  i2686.bounciness = i2687[1]
  i2686.dynamicFriction = i2687[2]
  i2686.staticFriction = i2687[3]
  i2686.frictionCombine = i2687[4]
  i2686.bounceCombine = i2687[5]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2689 = data
  var i2691 = i2689[0]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2691[i + 0]));
  }
  i2688.ShaderCompilationErrors = i2690
  i2688.name = i2689[1]
  i2688.guid = i2689[2]
  var i2693 = i2689[3]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( i2693[i + 0] );
  }
  i2688.shaderDefinedKeywords = i2692
  var i2695 = i2689[4]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2695[i + 0]) );
  }
  i2688.passes = i2694
  var i2697 = i2689[5]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2697[i + 0]) );
  }
  i2688.usePasses = i2696
  var i2699 = i2689[6]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2699[i + 0]) );
  }
  i2688.defaultParameterValues = i2698
  request.r(i2689[7], i2689[8], 0, i2688, 'unityFallbackShader')
  i2688.readDepth = !!i2689[9]
  i2688.hasDepthOnlyPass = !!i2689[10]
  i2688.isCreatedByShaderGraph = !!i2689[11]
  i2688.disableBatching = !!i2689[12]
  i2688.compiled = !!i2689[13]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2703 = data
  i2702.shaderName = i2703[0]
  i2702.errorMessage = i2703[1]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2706 = root || new pc.UnityShaderPass()
  var i2707 = data
  i2706.id = i2707[0]
  i2706.subShaderIndex = i2707[1]
  i2706.name = i2707[2]
  i2706.passType = i2707[3]
  i2706.grabPassTextureName = i2707[4]
  i2706.usePass = !!i2707[5]
  i2706.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[6], i2706.zTest)
  i2706.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[7], i2706.zWrite)
  i2706.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[8], i2706.culling)
  i2706.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2707[9], i2706.blending)
  i2706.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2707[10], i2706.alphaBlending)
  i2706.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[11], i2706.colorWriteMask)
  i2706.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[12], i2706.offsetUnits)
  i2706.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[13], i2706.offsetFactor)
  i2706.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[14], i2706.stencilRef)
  i2706.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[15], i2706.stencilReadMask)
  i2706.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[16], i2706.stencilWriteMask)
  i2706.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2707[17], i2706.stencilOp)
  i2706.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2707[18], i2706.stencilOpFront)
  i2706.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2707[19], i2706.stencilOpBack)
  var i2709 = i2707[20]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2709[i + 0]) );
  }
  i2706.tags = i2708
  var i2711 = i2707[21]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( i2711[i + 0] );
  }
  i2706.passDefinedKeywords = i2710
  var i2713 = i2707[22]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2713[i + 0]) );
  }
  i2706.passDefinedKeywordGroups = i2712
  var i2715 = i2707[23]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2715[i + 0]) );
  }
  i2706.variants = i2714
  var i2717 = i2707[24]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2717[i + 0]) );
  }
  i2706.excludedVariants = i2716
  i2706.hasDepthReader = !!i2707[25]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2719 = data
  i2718.val = i2719[0]
  i2718.name = i2719[1]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2721 = data
  i2720.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[0], i2720.src)
  i2720.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[1], i2720.dst)
  i2720.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[2], i2720.op)
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2723 = data
  i2722.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2723[0], i2722.pass)
  i2722.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2723[1], i2722.fail)
  i2722.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2723[2], i2722.zFail)
  i2722.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2723[3], i2722.comp)
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2727 = data
  i2726.name = i2727[0]
  i2726.value = i2727[1]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2731 = data
  var i2733 = i2731[0]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( i2733[i + 0] );
  }
  i2730.keywords = i2732
  i2730.hasDiscard = !!i2731[1]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2737 = data
  i2736.passId = i2737[0]
  i2736.subShaderIndex = i2737[1]
  var i2739 = i2737[2]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( i2739[i + 0] );
  }
  i2736.keywords = i2738
  i2736.vertexProgram = i2737[3]
  i2736.fragmentProgram = i2737[4]
  i2736.exportedForWebGl2 = !!i2737[5]
  i2736.readDepth = !!i2737[6]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2743 = data
  request.r(i2743[0], i2743[1], 0, i2742, 'shader')
  i2742.pass = i2743[2]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2747 = data
  i2746.name = i2747[0]
  i2746.type = i2747[1]
  i2746.value = new pc.Vec4( i2747[2], i2747[3], i2747[4], i2747[5] )
  i2746.textureValue = i2747[6]
  i2746.shaderPropertyFlag = i2747[7]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2749 = data
  i2748.name = i2749[0]
  request.r(i2749[1], i2749[2], 0, i2748, 'texture')
  i2748.aabb = i2749[3]
  i2748.vertices = i2749[4]
  i2748.triangles = i2749[5]
  i2748.textureRect = UnityEngine.Rect.MinMaxRect(i2749[6], i2749[7], i2749[8], i2749[9])
  i2748.packedRect = UnityEngine.Rect.MinMaxRect(i2749[10], i2749[11], i2749[12], i2749[13])
  i2748.border = new pc.Vec4( i2749[14], i2749[15], i2749[16], i2749[17] )
  i2748.transparency = i2749[18]
  i2748.bounds = i2749[19]
  i2748.pixelsPerUnit = i2749[20]
  i2748.textureWidth = i2749[21]
  i2748.textureHeight = i2749[22]
  i2748.nativeSize = new pc.Vec2( i2749[23], i2749[24] )
  i2748.pivot = new pc.Vec2( i2749[25], i2749[26] )
  i2748.textureRectOffset = new pc.Vec2( i2749[27], i2749[28] )
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2751 = data
  i2750.name = i2751[0]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2753 = data
  i2752.name = i2753[0]
  i2752.ascent = i2753[1]
  i2752.originalLineHeight = i2753[2]
  i2752.fontSize = i2753[3]
  var i2755 = i2753[4]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2755[i + 0]) );
  }
  i2752.characterInfo = i2754
  request.r(i2753[5], i2753[6], 0, i2752, 'texture')
  i2752.originalFontSize = i2753[7]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2759 = data
  i2758.index = i2759[0]
  i2758.advance = i2759[1]
  i2758.bearing = i2759[2]
  i2758.glyphWidth = i2759[3]
  i2758.glyphHeight = i2759[4]
  i2758.minX = i2759[5]
  i2758.maxX = i2759[6]
  i2758.minY = i2759[7]
  i2758.maxY = i2759[8]
  i2758.uvBottomLeftX = i2759[9]
  i2758.uvBottomLeftY = i2759[10]
  i2758.uvBottomRightX = i2759[11]
  i2758.uvBottomRightY = i2759[12]
  i2758.uvTopLeftX = i2759[13]
  i2758.uvTopLeftY = i2759[14]
  i2758.uvTopRightX = i2759[15]
  i2758.uvTopRightY = i2759[16]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2761 = data
  i2760.name = i2761[0]
  i2760.bytes64 = i2761[1]
  i2760.data = i2761[2]
  return i2760
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2762 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2763 = data
  var i2765 = i2763[0]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 1, i2764, '')
  }
  i2762.components = i2764
  return i2762
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2768 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2769 = data
  i2768.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2769[0], i2768.mode)
  i2768.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2769[1], i2768.neutralHDRRangeReductionMode)
  i2768.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2769[2], i2768.acesPreset)
  i2768.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2769[3], i2768.hueShiftAmount)
  i2768.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2769[4], i2768.detectPaperWhite)
  i2768.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2769[5], i2768.paperWhite)
  i2768.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2769[6], i2768.detectBrightnessLimits)
  i2768.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2769[7], i2768.minNits)
  i2768.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2769[8], i2768.maxNits)
  i2768.active = !!i2769[9]
  return i2768
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2770 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2771 = data
  i2770.m_Value = i2771[0]
  i2770.m_OverrideState = !!i2771[1]
  return i2770
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2773 = data
  i2772.m_Value = i2773[0]
  i2772.m_OverrideState = !!i2773[1]
  return i2772
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2774 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2775 = data
  i2774.m_Value = i2775[0]
  i2774.m_OverrideState = !!i2775[1]
  return i2774
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2776 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2777 = data
  i2776.m_Value = i2777[0]
  i2776.m_OverrideState = !!i2777[1]
  return i2776
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2778 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2779 = data
  i2778.m_Value = !!i2779[0]
  i2778.m_OverrideState = !!i2779[1]
  return i2778
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2780 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2781 = data
  i2780.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2781[0], i2780.skipIterations)
  i2780.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2781[1], i2780.threshold)
  i2780.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2781[2], i2780.intensity)
  i2780.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2781[3], i2780.scatter)
  i2780.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2781[4], i2780.clamp)
  i2780.tint = request.d('UnityEngine.Rendering.ColorParameter', i2781[5], i2780.tint)
  i2780.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2781[6], i2780.highQualityFiltering)
  i2780.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2781[7], i2780.downscale)
  i2780.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2781[8], i2780.maxIterations)
  i2780.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2781[9], i2780.dirtTexture)
  i2780.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2781[10], i2780.dirtIntensity)
  i2780.active = !!i2781[11]
  return i2780
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2782 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2783 = data
  i2782.m_Value = i2783[0]
  i2782.m_OverrideState = !!i2783[1]
  return i2782
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2784 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2785 = data
  i2784.m_Value = i2785[0]
  i2784.m_OverrideState = !!i2785[1]
  return i2784
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2786 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2787 = data
  i2786.m_Value = new pc.Color(i2787[0], i2787[1], i2787[2], i2787[3])
  i2786.m_OverrideState = !!i2787[4]
  return i2786
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2788 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2789 = data
  i2788.m_Value = i2789[0]
  i2788.m_OverrideState = !!i2789[1]
  return i2788
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2791 = data
  i2790.dimension = i2791[0]
  request.r(i2791[1], i2791[2], 0, i2790, 'm_Value')
  i2790.m_OverrideState = !!i2791[3]
  return i2790
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i2792 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i2793 = data
  i2792.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i2793[0], i2792.mode)
  i2792.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i2793[1], i2792.quality)
  i2792.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2793[2], i2792.intensity)
  i2792.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2793[3], i2792.clamp)
  i2792.active = !!i2793[4]
  return i2792
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i2794 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i2795 = data
  i2794.m_Value = i2795[0]
  i2794.m_OverrideState = !!i2795[1]
  return i2794
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i2797 = data
  i2796.m_Value = i2797[0]
  i2796.m_OverrideState = !!i2797[1]
  return i2796
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2798 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2799 = data
  i2798.color = request.d('UnityEngine.Rendering.ColorParameter', i2799[0], i2798.color)
  i2798.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2799[1], i2798.center)
  i2798.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2799[2], i2798.intensity)
  i2798.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2799[3], i2798.smoothness)
  i2798.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2799[4], i2798.rounded)
  i2798.active = !!i2799[5]
  return i2798
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2801 = data
  i2800.m_Value = new pc.Vec2( i2801[0], i2801[1] )
  i2800.m_OverrideState = !!i2801[2]
  return i2800
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2802 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2803 = data
  i2802.normalStyle = i2803[0]
  i2802.normalSpacingOffset = i2803[1]
  i2802.boldStyle = i2803[2]
  i2802.boldSpacing = i2803[3]
  i2802.italicStyle = i2803[4]
  i2802.tabSize = i2803[5]
  request.r(i2803[6], i2803[7], 0, i2802, 'atlas')
  i2802.m_SourceFontFileGUID = i2803[8]
  i2802.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2803[9], i2802.m_CreationSettings)
  request.r(i2803[10], i2803[11], 0, i2802, 'm_SourceFontFile')
  i2802.m_SourceFontFilePath = i2803[12]
  i2802.m_AtlasPopulationMode = i2803[13]
  i2802.InternalDynamicOS = !!i2803[14]
  var i2805 = i2803[15]
  var i2804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.add(request.d('UnityEngine.TextCore.Glyph', i2805[i + 0]));
  }
  i2802.m_GlyphTable = i2804
  var i2807 = i2803[16]
  var i2806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.add(request.d('TMPro.TMP_Character', i2807[i + 0]));
  }
  i2802.m_CharacterTable = i2806
  var i2809 = i2803[17]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 2) {
  request.r(i2809[i + 0], i2809[i + 1], 2, i2808, '')
  }
  i2802.m_AtlasTextures = i2808
  i2802.m_AtlasTextureIndex = i2803[18]
  i2802.m_IsMultiAtlasTexturesEnabled = !!i2803[19]
  i2802.m_GetFontFeatures = !!i2803[20]
  i2802.m_ClearDynamicDataOnBuild = !!i2803[21]
  i2802.m_AtlasWidth = i2803[22]
  i2802.m_AtlasHeight = i2803[23]
  i2802.m_AtlasPadding = i2803[24]
  i2802.m_AtlasRenderMode = i2803[25]
  var i2811 = i2803[26]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.add(request.d('UnityEngine.TextCore.GlyphRect', i2811[i + 0]));
  }
  i2802.m_UsedGlyphRects = i2810
  var i2813 = i2803[27]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.add(request.d('UnityEngine.TextCore.GlyphRect', i2813[i + 0]));
  }
  i2802.m_FreeGlyphRects = i2812
  i2802.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2803[28], i2802.m_FontFeatureTable)
  i2802.m_ShouldReimportFontFeatures = !!i2803[29]
  var i2815 = i2803[30]
  var i2814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2815.length; i += 2) {
  request.r(i2815[i + 0], i2815[i + 1], 1, i2814, '')
  }
  i2802.m_FallbackFontAssetTable = i2814
  var i2817 = i2803[31]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('TMPro.TMP_FontWeightPair', i2817[i + 0]) );
  }
  i2802.m_FontWeightTable = i2816
  var i2819 = i2803[32]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('TMPro.TMP_FontWeightPair', i2819[i + 0]) );
  }
  i2802.fontWeights = i2818
  i2802.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2803[33], i2802.m_fontInfo)
  var i2821 = i2803[34]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.add(request.d('TMPro.TMP_Glyph', i2821[i + 0]));
  }
  i2802.m_glyphInfoList = i2820
  i2802.m_KerningTable = request.d('TMPro.KerningTable', i2803[35], i2802.m_KerningTable)
  var i2823 = i2803[36]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2823.length; i += 2) {
  request.r(i2823[i + 0], i2823[i + 1], 1, i2822, '')
  }
  i2802.fallbackFontAssets = i2822
  i2802.m_Version = i2803[37]
  i2802.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2803[38], i2802.m_FaceInfo)
  request.r(i2803[39], i2803[40], 0, i2802, 'm_Material')
  return i2802
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2824 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2825 = data
  i2824.sourceFontFileName = i2825[0]
  i2824.sourceFontFileGUID = i2825[1]
  i2824.faceIndex = i2825[2]
  i2824.pointSizeSamplingMode = i2825[3]
  i2824.pointSize = i2825[4]
  i2824.padding = i2825[5]
  i2824.paddingMode = i2825[6]
  i2824.packingMode = i2825[7]
  i2824.atlasWidth = i2825[8]
  i2824.atlasHeight = i2825[9]
  i2824.characterSetSelectionMode = i2825[10]
  i2824.characterSequence = i2825[11]
  i2824.referencedFontAssetGUID = i2825[12]
  i2824.referencedTextAssetGUID = i2825[13]
  i2824.fontStyle = i2825[14]
  i2824.fontStyleModifier = i2825[15]
  i2824.renderMode = i2825[16]
  i2824.includeFontFeatures = !!i2825[17]
  return i2824
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2828 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2829 = data
  i2828.m_Index = i2829[0]
  i2828.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2829[1], i2828.m_Metrics)
  i2828.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2829[2], i2828.m_GlyphRect)
  i2828.m_Scale = i2829[3]
  i2828.m_AtlasIndex = i2829[4]
  i2828.m_ClassDefinitionType = i2829[5]
  return i2828
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2832 = root || request.c( 'TMPro.TMP_Character' )
  var i2833 = data
  i2832.m_ElementType = i2833[0]
  i2832.m_Unicode = i2833[1]
  i2832.m_GlyphIndex = i2833[2]
  i2832.m_Scale = i2833[3]
  return i2832
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2838 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2839 = data
  i2838.m_X = i2839[0]
  i2838.m_Y = i2839[1]
  i2838.m_Width = i2839[2]
  i2838.m_Height = i2839[3]
  return i2838
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2840 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2841 = data
  var i2843 = i2841[0]
  var i2842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.add(request.d('TMPro.MultipleSubstitutionRecord', i2843[i + 0]));
  }
  i2840.m_MultipleSubstitutionRecords = i2842
  var i2845 = i2841[1]
  var i2844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.add(request.d('TMPro.LigatureSubstitutionRecord', i2845[i + 0]));
  }
  i2840.m_LigatureSubstitutionRecords = i2844
  var i2847 = i2841[2]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2847[i + 0]));
  }
  i2840.m_GlyphPairAdjustmentRecords = i2846
  var i2849 = i2841[3]
  var i2848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2849[i + 0]));
  }
  i2840.m_MarkToBaseAdjustmentRecords = i2848
  var i2851 = i2841[4]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2851[i + 0]));
  }
  i2840.m_MarkToMarkAdjustmentRecords = i2850
  return i2840
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2854 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2855 = data
  i2854.m_TargetGlyphID = i2855[0]
  i2854.m_SubstituteGlyphIDs = i2855[1]
  return i2854
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2858 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2859 = data
  i2858.m_ComponentGlyphIDs = i2859[0]
  i2858.m_LigatureGlyphID = i2859[1]
  return i2858
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2862 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2863 = data
  i2862.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2863[0], i2862.m_FirstAdjustmentRecord)
  i2862.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2863[1], i2862.m_SecondAdjustmentRecord)
  i2862.m_FeatureLookupFlags = i2863[2]
  return i2862
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2867 = data
  i2866.m_BaseGlyphID = i2867[0]
  i2866.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2867[1], i2866.m_BaseGlyphAnchorPoint)
  i2866.m_MarkGlyphID = i2867[2]
  i2866.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2867[3], i2866.m_MarkPositionAdjustment)
  return i2866
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2871 = data
  i2870.m_BaseMarkGlyphID = i2871[0]
  i2870.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2871[1], i2870.m_BaseMarkGlyphAnchorPoint)
  i2870.m_CombiningMarkGlyphID = i2871[2]
  i2870.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2871[3], i2870.m_CombiningMarkPositionAdjustment)
  return i2870
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2877 = data
  request.r(i2877[0], i2877[1], 0, i2876, 'regularTypeface')
  request.r(i2877[2], i2877[3], 0, i2876, 'italicTypeface')
  return i2876
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2878 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2879 = data
  i2878.Name = i2879[0]
  i2878.PointSize = i2879[1]
  i2878.Scale = i2879[2]
  i2878.CharacterCount = i2879[3]
  i2878.LineHeight = i2879[4]
  i2878.Baseline = i2879[5]
  i2878.Ascender = i2879[6]
  i2878.CapHeight = i2879[7]
  i2878.Descender = i2879[8]
  i2878.CenterLine = i2879[9]
  i2878.SuperscriptOffset = i2879[10]
  i2878.SubscriptOffset = i2879[11]
  i2878.SubSize = i2879[12]
  i2878.Underline = i2879[13]
  i2878.UnderlineThickness = i2879[14]
  i2878.strikethrough = i2879[15]
  i2878.strikethroughThickness = i2879[16]
  i2878.TabWidth = i2879[17]
  i2878.Padding = i2879[18]
  i2878.AtlasWidth = i2879[19]
  i2878.AtlasHeight = i2879[20]
  return i2878
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2882 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2883 = data
  i2882.id = i2883[0]
  i2882.x = i2883[1]
  i2882.y = i2883[2]
  i2882.width = i2883[3]
  i2882.height = i2883[4]
  i2882.xOffset = i2883[5]
  i2882.yOffset = i2883[6]
  i2882.xAdvance = i2883[7]
  i2882.scale = i2883[8]
  return i2882
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2884 = root || request.c( 'TMPro.KerningTable' )
  var i2885 = data
  var i2887 = i2885[0]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.add(request.d('TMPro.KerningPair', i2887[i + 0]));
  }
  i2884.kerningPairs = i2886
  return i2884
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2890 = root || request.c( 'TMPro.KerningPair' )
  var i2891 = data
  i2890.xOffset = i2891[0]
  i2890.m_FirstGlyph = i2891[1]
  i2890.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2891[2], i2890.m_FirstGlyphAdjustments)
  i2890.m_SecondGlyph = i2891[3]
  i2890.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2891[4], i2890.m_SecondGlyphAdjustments)
  i2890.m_IgnoreSpacingAdjustments = !!i2891[5]
  return i2890
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2892 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2893 = data
  i2892.m_FaceIndex = i2893[0]
  i2892.m_FamilyName = i2893[1]
  i2892.m_StyleName = i2893[2]
  i2892.m_PointSize = i2893[3]
  i2892.m_Scale = i2893[4]
  i2892.m_UnitsPerEM = i2893[5]
  i2892.m_LineHeight = i2893[6]
  i2892.m_AscentLine = i2893[7]
  i2892.m_CapLine = i2893[8]
  i2892.m_MeanLine = i2893[9]
  i2892.m_Baseline = i2893[10]
  i2892.m_DescentLine = i2893[11]
  i2892.m_SuperscriptOffset = i2893[12]
  i2892.m_SuperscriptSize = i2893[13]
  i2892.m_SubscriptOffset = i2893[14]
  i2892.m_SubscriptSize = i2893[15]
  i2892.m_UnderlineOffset = i2893[16]
  i2892.m_UnderlineThickness = i2893[17]
  i2892.m_StrikethroughOffset = i2893[18]
  i2892.m_StrikethroughThickness = i2893[19]
  i2892.m_TabWidth = i2893[20]
  return i2892
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2894 = root || request.c( 'TMPro.TMP_Settings' )
  var i2895 = data
  i2894.assetVersion = i2895[0]
  i2894.m_TextWrappingMode = i2895[1]
  i2894.m_enableKerning = !!i2895[2]
  var i2897 = i2895[3]
  var i2896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.add(i2897[i + 0]);
  }
  i2894.m_ActiveFontFeatures = i2896
  i2894.m_enableExtraPadding = !!i2895[4]
  i2894.m_enableTintAllSprites = !!i2895[5]
  i2894.m_enableParseEscapeCharacters = !!i2895[6]
  i2894.m_EnableRaycastTarget = !!i2895[7]
  i2894.m_GetFontFeaturesAtRuntime = !!i2895[8]
  i2894.m_missingGlyphCharacter = i2895[9]
  i2894.m_ClearDynamicDataOnBuild = !!i2895[10]
  i2894.m_warningsDisabled = !!i2895[11]
  request.r(i2895[12], i2895[13], 0, i2894, 'm_defaultFontAsset')
  i2894.m_defaultFontAssetPath = i2895[14]
  i2894.m_defaultFontSize = i2895[15]
  i2894.m_defaultAutoSizeMinRatio = i2895[16]
  i2894.m_defaultAutoSizeMaxRatio = i2895[17]
  i2894.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2895[18], i2895[19] )
  i2894.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2895[20], i2895[21] )
  i2894.m_autoSizeTextContainer = !!i2895[22]
  i2894.m_IsTextObjectScaleStatic = !!i2895[23]
  var i2899 = i2895[24]
  var i2898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2899.length; i += 2) {
  request.r(i2899[i + 0], i2899[i + 1], 1, i2898, '')
  }
  i2894.m_fallbackFontAssets = i2898
  i2894.m_matchMaterialPreset = !!i2895[25]
  i2894.m_HideSubTextObjects = !!i2895[26]
  request.r(i2895[27], i2895[28], 0, i2894, 'm_defaultSpriteAsset')
  i2894.m_defaultSpriteAssetPath = i2895[29]
  i2894.m_enableEmojiSupport = !!i2895[30]
  i2894.m_MissingCharacterSpriteUnicode = i2895[31]
  var i2901 = i2895[32]
  var i2900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2901.length; i += 2) {
  request.r(i2901[i + 0], i2901[i + 1], 1, i2900, '')
  }
  i2894.m_EmojiFallbackTextAssets = i2900
  i2894.m_defaultColorGradientPresetsPath = i2895[33]
  request.r(i2895[34], i2895[35], 0, i2894, 'm_defaultStyleSheet')
  i2894.m_StyleSheetsResourcePath = i2895[36]
  request.r(i2895[37], i2895[38], 0, i2894, 'm_leadingCharacters')
  request.r(i2895[39], i2895[40], 0, i2894, 'm_followingCharacters')
  i2894.m_UseModernHangulLineBreakingRules = !!i2895[41]
  return i2894
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2904 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2905 = data
  i2904.m_Width = i2905[0]
  i2904.m_Height = i2905[1]
  i2904.m_HorizontalBearingX = i2905[2]
  i2904.m_HorizontalBearingY = i2905[3]
  i2904.m_HorizontalAdvance = i2905[4]
  return i2904
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2906 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2907 = data
  i2906.m_GlyphIndex = i2907[0]
  i2906.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2907[1], i2906.m_GlyphValueRecord)
  return i2906
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2908 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2909 = data
  i2908.m_XPlacement = i2909[0]
  i2908.m_YPlacement = i2909[1]
  i2908.m_XAdvance = i2909[2]
  i2908.m_YAdvance = i2909[3]
  return i2908
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2910 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2911 = data
  request.r(i2911[0], i2911[1], 0, i2910, 'spriteSheet')
  var i2913 = i2911[2]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.add(request.d('TMPro.TMP_Sprite', i2913[i + 0]));
  }
  i2910.spriteInfoList = i2912
  var i2915 = i2911[3]
  var i2914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2915.length; i += 2) {
  request.r(i2915[i + 0], i2915[i + 1], 1, i2914, '')
  }
  i2910.fallbackSpriteAssets = i2914
  var i2917 = i2911[4]
  var i2916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.add(request.d('TMPro.TMP_SpriteCharacter', i2917[i + 0]));
  }
  i2910.m_SpriteCharacterTable = i2916
  var i2919 = i2911[5]
  var i2918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.add(request.d('TMPro.TMP_SpriteGlyph', i2919[i + 0]));
  }
  i2910.m_GlyphTable = i2918
  i2910.m_Version = i2911[6]
  i2910.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2911[7], i2910.m_FaceInfo)
  request.r(i2911[8], i2911[9], 0, i2910, 'm_Material')
  return i2910
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2922 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2923 = data
  i2922.name = i2923[0]
  i2922.hashCode = i2923[1]
  i2922.unicode = i2923[2]
  i2922.pivot = new pc.Vec2( i2923[3], i2923[4] )
  request.r(i2923[5], i2923[6], 0, i2922, 'sprite')
  i2922.id = i2923[7]
  i2922.x = i2923[8]
  i2922.y = i2923[9]
  i2922.width = i2923[10]
  i2922.height = i2923[11]
  i2922.xOffset = i2923[12]
  i2922.yOffset = i2923[13]
  i2922.xAdvance = i2923[14]
  i2922.scale = i2923[15]
  return i2922
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2928 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2929 = data
  i2928.m_Name = i2929[0]
  i2928.m_ElementType = i2929[1]
  i2928.m_Unicode = i2929[2]
  i2928.m_GlyphIndex = i2929[3]
  i2928.m_Scale = i2929[4]
  return i2928
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2932 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2933 = data
  request.r(i2933[0], i2933[1], 0, i2932, 'sprite')
  i2932.m_Index = i2933[2]
  i2932.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2933[3], i2932.m_Metrics)
  i2932.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2933[4], i2932.m_GlyphRect)
  i2932.m_Scale = i2933[5]
  i2932.m_AtlasIndex = i2933[6]
  i2932.m_ClassDefinitionType = i2933[7]
  return i2932
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2934 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2935 = data
  var i2937 = i2935[0]
  var i2936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.add(request.d('TMPro.TMP_Style', i2937[i + 0]));
  }
  i2934.m_StyleList = i2936
  return i2934
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2940 = root || request.c( 'TMPro.TMP_Style' )
  var i2941 = data
  i2940.m_Name = i2941[0]
  i2940.m_HashCode = i2941[1]
  i2940.m_OpeningDefinition = i2941[2]
  i2940.m_ClosingDefinition = i2941[3]
  i2940.m_OpeningTagArray = i2941[4]
  i2940.m_ClosingTagArray = i2941[5]
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2943 = data
  var i2945 = i2943[0]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2945[i + 0]) );
  }
  i2942.files = i2944
  i2942.componentToPrefabIds = i2943[1]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2949 = data
  i2948.path = i2949[0]
  request.r(i2949[1], i2949[2], 0, i2948, 'unityObject')
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2951 = data
  var i2953 = i2951[0]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2953[i + 0]) );
  }
  i2950.scriptsExecutionOrder = i2952
  var i2955 = i2951[1]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2955[i + 0]) );
  }
  i2950.sortingLayers = i2954
  var i2957 = i2951[2]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2957[i + 0]) );
  }
  i2950.cullingLayers = i2956
  i2950.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2951[3], i2950.timeSettings)
  i2950.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2951[4], i2950.physicsSettings)
  i2950.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2951[5], i2950.physics2DSettings)
  i2950.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2951[6], i2950.qualitySettings)
  i2950.enableRealtimeShadows = !!i2951[7]
  i2950.enableAutoInstancing = !!i2951[8]
  i2950.enableStaticBatching = !!i2951[9]
  i2950.enableDynamicBatching = !!i2951[10]
  i2950.lightmapEncodingQuality = i2951[11]
  i2950.desiredColorSpace = i2951[12]
  var i2959 = i2951[13]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 1) {
    i2958.push( i2959[i + 0] );
  }
  i2950.allTags = i2958
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2963 = data
  i2962.name = i2963[0]
  i2962.value = i2963[1]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2967 = data
  i2966.id = i2967[0]
  i2966.name = i2967[1]
  i2966.value = i2967[2]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2971 = data
  i2970.id = i2971[0]
  i2970.name = i2971[1]
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2973 = data
  i2972.fixedDeltaTime = i2973[0]
  i2972.maximumDeltaTime = i2973[1]
  i2972.timeScale = i2973[2]
  i2972.maximumParticleTimestep = i2973[3]
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2975 = data
  i2974.gravity = new pc.Vec3( i2975[0], i2975[1], i2975[2] )
  i2974.defaultSolverIterations = i2975[3]
  i2974.bounceThreshold = i2975[4]
  i2974.autoSyncTransforms = !!i2975[5]
  i2974.autoSimulation = !!i2975[6]
  var i2977 = i2975[7]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2977[i + 0]) );
  }
  i2974.collisionMatrix = i2976
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2981 = data
  i2980.enabled = !!i2981[0]
  i2980.layerId = i2981[1]
  i2980.otherLayerId = i2981[2]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2983 = data
  request.r(i2983[0], i2983[1], 0, i2982, 'material')
  i2982.gravity = new pc.Vec2( i2983[2], i2983[3] )
  i2982.positionIterations = i2983[4]
  i2982.velocityIterations = i2983[5]
  i2982.velocityThreshold = i2983[6]
  i2982.maxLinearCorrection = i2983[7]
  i2982.maxAngularCorrection = i2983[8]
  i2982.maxTranslationSpeed = i2983[9]
  i2982.maxRotationSpeed = i2983[10]
  i2982.baumgarteScale = i2983[11]
  i2982.baumgarteTOIScale = i2983[12]
  i2982.timeToSleep = i2983[13]
  i2982.linearSleepTolerance = i2983[14]
  i2982.angularSleepTolerance = i2983[15]
  i2982.defaultContactOffset = i2983[16]
  i2982.autoSimulation = !!i2983[17]
  i2982.queriesHitTriggers = !!i2983[18]
  i2982.queriesStartInColliders = !!i2983[19]
  i2982.callbacksOnDisable = !!i2983[20]
  i2982.reuseCollisionCallbacks = !!i2983[21]
  i2982.autoSyncTransforms = !!i2983[22]
  var i2985 = i2983[23]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2985[i + 0]) );
  }
  i2982.collisionMatrix = i2984
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2989 = data
  i2988.enabled = !!i2989[0]
  i2988.layerId = i2989[1]
  i2988.otherLayerId = i2989[2]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2991 = data
  var i2993 = i2991[0]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 1) {
    i2992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2993[i + 0]) );
  }
  i2990.qualityLevels = i2992
  var i2995 = i2991[1]
  var i2994 = []
  for(var i = 0; i < i2995.length; i += 1) {
    i2994.push( i2995[i + 0] );
  }
  i2990.names = i2994
  i2990.shadows = i2991[2]
  i2990.anisotropicFiltering = i2991[3]
  i2990.antiAliasing = i2991[4]
  i2990.lodBias = i2991[5]
  i2990.shadowCascades = i2991[6]
  i2990.shadowDistance = i2991[7]
  i2990.shadowmaskMode = i2991[8]
  i2990.shadowProjection = i2991[9]
  i2990.shadowResolution = i2991[10]
  i2990.softParticles = !!i2991[11]
  i2990.softVegetation = !!i2991[12]
  i2990.activeColorSpace = i2991[13]
  i2990.desiredColorSpace = i2991[14]
  i2990.masterTextureLimit = i2991[15]
  i2990.maxQueuedFrames = i2991[16]
  i2990.particleRaycastBudget = i2991[17]
  i2990.pixelLightCount = i2991[18]
  i2990.realtimeReflectionProbes = !!i2991[19]
  i2990.shadowCascade2Split = i2991[20]
  i2990.shadowCascade4Split = new pc.Vec3( i2991[21], i2991[22], i2991[23] )
  i2990.streamingMipmapsActive = !!i2991[24]
  i2990.vSyncCount = i2991[25]
  i2990.asyncUploadBufferSize = i2991[26]
  i2990.asyncUploadTimeSlice = i2991[27]
  i2990.billboardsFaceCameraPosition = !!i2991[28]
  i2990.shadowNearPlaneOffset = i2991[29]
  i2990.streamingMipmapsMemoryBudget = i2991[30]
  i2990.maximumLODLevel = i2991[31]
  i2990.streamingMipmapsAddAllCameras = !!i2991[32]
  i2990.streamingMipmapsMaxLevelReduction = i2991[33]
  i2990.streamingMipmapsRenderersPerFrame = i2991[34]
  i2990.resolutionScalingFixedDPIFactor = i2991[35]
  i2990.streamingMipmapsMaxFileIORequests = i2991[36]
  i2990.currentQualityLevel = i2991[37]
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3001 = data
  i3000.weight = i3001[0]
  i3000.vertices = i3001[1]
  i3000.normals = i3001[2]
  i3000.tangents = i3001[3]
  return i3000
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3002 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3003 = data
  i3002.m_XCoordinate = i3003[0]
  i3002.m_YCoordinate = i3003[1]
  return i3002
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3004 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3005 = data
  i3004.m_XPositionAdjustment = i3005[0]
  i3004.m_YPositionAdjustment = i3005[1]
  return i3004
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3006 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3007 = data
  i3006.xPlacement = i3007[0]
  i3006.yPlacement = i3007[1]
  i3006.xAdvance = i3007[2]
  i3006.yAdvance = i3007[3]
  return i3006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"26":[27],"107":[14],"108":[9],"109":[9],"110":[9],"111":[9],"23":[9],"112":[9],"113":[114],"115":[114],"116":[114],"117":[114],"118":[114],"119":[114],"120":[114],"121":[114],"122":[114],"123":[114],"124":[114],"125":[114],"126":[114],"127":[14],"128":[5],"129":[130],"131":[130],"33":[32],"132":[46],"133":[33],"70":[32],"134":[14],"16":[14],"18":[17],"135":[32],"136":[5,32],"39":[32,37],"137":[32],"138":[37,32],"139":[5],"140":[37,32],"141":[32],"142":[143],"144":[143],"145":[143],"146":[32],"147":[32],"36":[33],"38":[37,32],"148":[32],"35":[33],"51":[32],"149":[32],"45":[32],"150":[32],"56":[32],"151":[32],"42":[32],"59":[32],"152":[32],"153":[37,32],"154":[32],"58":[32],"55":[32],"155":[32],"54":[37,32],"63":[32],"156":[46],"157":[46],"47":[46],"158":[46],"159":[14],"160":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","BallBehavior","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.HingeJoint","BasketBehavior","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.PhysicsMaterial","InputManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Sprite","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","LunaGameManager","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "INDIEZ_PerformanceTest";

Deserializers.lunaInitializationTime = "11/25/2025 03:49:18";

Deserializers.lunaDaysRunning = "8.4";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "INDIEZ_PerformanceTest";

Deserializers.lunaAppID = "34764";

Deserializers.projectId = "0746943d558dd7841a3c7e4f41444c2a";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1603";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4064";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.UnityTechnologies.com.unity.template.urpblank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "25e2ec87-b225-48f1-af53-a09bf86d65ba";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

